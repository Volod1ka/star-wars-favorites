import type { Character } from '@models/characters'
import { FlashList, type FlashListProps } from '@shopify/flash-list'
import tw from '@tools/tailwind'
import { Text } from 'react-native'

export interface CharacterListProps extends Partial<FlashListProps<Character>> {
  characters: Character[]
  selectedCharacters: Character[]
  onPressCharacter?: (url: string) => void
}

const CharacterList = ({
  characters = [],
  selectedCharacters = [],
  onPressCharacter,
  ...props
}: CharacterListProps) => {
  return (
    <FlashList
      contentContainerStyle={tw`px-4 py-2`}
      indicatorStyle="black"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => `character-${index}`}
      {...props}
      estimatedItemSize={100}
      data={characters}
      renderItem={({ item }) => (
        // TODO: Add renderItem
        <Text
          style={tw`mx-5 mb-5`}
          onPress={() => onPressCharacter?.(item.url)}
        >
          {item.name}
        </Text>
      )}
    />
  )
}

export default CharacterList
