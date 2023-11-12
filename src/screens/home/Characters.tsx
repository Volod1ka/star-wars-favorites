import { useCharactersQuery } from '@api'
import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { Text, View } from 'react-native'

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(data)
    // TODO
    // navigation.navigate('CharacterInfo', { url })
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
          style={tw`self-center text-white text-base font-semibold`}
          onPress={() => charactersQuery.fetchNextPage()}
        >
          LOAD MORE
        </Text>
      )}
    </View>
  )
}

export default observer(CharactersScreen)
