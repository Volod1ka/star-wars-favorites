import { useCharactersQuery } from '@api'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { useCallback } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const onPressCharacter = useCallback(
    (url: string) => {
      navigation.navigate('CharacterInfo', { url })
    },
    [charactersQuery.data],
  )

  const onPressNextPage = () => {
    charactersQuery.fetchNextPage()
  }

  const disabledNextPage =
    charactersQuery.isFetching ||
    charactersQuery.isFetchingNextPage ||
    !charactersQuery.data.hasNextPage

  // TODO: remove it during the build UI phase
  return (
    <SafeAreaView style={tw`flex-1`}>
      <CharacterList
        characters={charactersQuery.data.characters}
        selectedCharacters={[]}
        onPressCharacter={onPressCharacter}
      />

      <View>
        {disabledNextPage || (
          <Text style={tw`self-center`} onPress={onPressNextPage}>
            NEXT PAGE
          </Text>
        )}
      </View>
    </SafeAreaView>
  )
}

export default CharactersScreen
