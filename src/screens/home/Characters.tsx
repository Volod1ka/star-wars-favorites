import { useCharactersQuery } from '@api'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { View } from 'react-native'

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const onPressCharacter = (url: string) => {
    navigation.navigate('CharacterInfo', { url })
  }

  // TODO
  const onPressNextPage = () => {
    charactersQuery.fetchNextPage()
  }

  // TODO
  const disabledNextPage =
    charactersQuery.isFetching ||
    charactersQuery.isFetchingNextPage ||
    !charactersQuery.data.hasNextPage

  // TODO: remove it during the build UI phase
  return (
    <View style={tw`flex-1`}>
      <CharacterList
        characters={charactersQuery.data.characters}
        selectedCharacters={[]}
        onPressCharacter={onPressCharacter}
      />
    </View>
  )
}

export default CharactersScreen
