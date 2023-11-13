import { useCharactersQuery } from '@api'
import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

const CharactersScreen = () => {
  const { t } = useTranslation()

  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    navigation.navigate('CharacterInfo', { url: data.url })
  }

  const characters: CharacterShortData[] = charactersQuery.data.characters.map(
    character => ({
      ...character,
      favorite: favoritesStore.characters.some(
        favorite => favorite.url === character.url,
      ),
    }),
  )

  const disabledLoadMore =
    charactersQuery.isFetching ||
    charactersQuery.isFetchingNextPage ||
    !charactersQuery.data.hasNextPage

  return (
    <View style={tw`flex-1`}>
      <CharacterList data={characters} onPressCard={onPressCard} />

      {disabledLoadMore || (
        <Text
          style={tw`self-center text-white text-base font-bold`}
          onPress={() => charactersQuery.fetchNextPage()}
        >
          {t('ui.list.load_more')}
        </Text>
      )}
    </View>
  )
}

export default observer(CharactersScreen)
