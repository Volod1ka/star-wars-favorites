import { useCharactersQuery } from '@api'
import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { OutlinedButton } from '@uikit/atoms/buttons'
import { LoadingBanner } from '@uikit/molecules'
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

  if (!charactersQuery.isFetched) {
    return <LoadingBanner />
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
    charactersQuery.isFetching || charactersQuery.isFetchingNextPage

  return (
    <View style={tw`flex-1`}>
      <CharacterList
        data={characters}
        onPressCard={onPressCard}
        ListFooterComponent={
          !characters.length ? null : (
            <View style={tw`pb-4 justify-center items-center`}>
              {charactersQuery.data.hasNextPage ? (
                <OutlinedButton
                  disabled={disabledLoadMore}
                  loading={disabledLoadMore}
                  title={t('ui.list.load_more')}
                  onPress={() => charactersQuery.fetchNextPage()}
                />
              ) : (
                <Text
                  style={tw`font-bold text-primary-dark text-base text-center`}
                >
                  {t('ui.list.loaded')}
                </Text>
              )}
            </View>
          )
        }
      />
    </View>
  )
}

export default observer(CharactersScreen)
