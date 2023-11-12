import { useCharactersQuery } from '@api'
import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { Text, View } from 'react-native'

// TODO
// const onPressNextPage = () => {
//   charactersQuery.fetchNextPage()
// }

// TODO
// const disabledNextPage =
//   charactersQuery.isFetching ||
//   charactersQuery.isFetchingNextPage ||
//   !charactersQuery.data.hasNextPage

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const { favoritesStore } = useStore()

  const onPressCharacter = (character: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(character)
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

  return (
    <View style={tw`flex-1`}>
      <CharacterList data={characters} onPressCharacter={onPressCharacter} />

      <Text
        style={tw`text-white text-base font-semibold`}
        onPress={() => {
          favoritesStore.clearAll()
        }}
      >
        CLEAR
      </Text>
    </View>
  )
}

export default observer(CharactersScreen)
