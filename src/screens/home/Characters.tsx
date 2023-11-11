import { useCharactersQuery } from '@api'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const charactersQuery = useCharactersQuery()

  const onPressText = (url: string) => {
    navigation.navigate('CharacterInfo', { url })
  }

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
      <ScrollView style={tw`flex-1`} contentContainerStyle={tw`items-center`}>
        {charactersQuery.data.characters.map((character, index) => (
          <Text
            key={`character-${index}`}
            style={tw`mx-5 mb-5`}
            onPress={() => onPressText(character.url)}
          >
            {character.name}
          </Text>
        ))}
      </ScrollView>

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
