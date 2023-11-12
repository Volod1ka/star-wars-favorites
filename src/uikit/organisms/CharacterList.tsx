import type { Character } from '@models/characters'
import { FlashList, type FlashListProps } from '@shopify/flash-list'
import tw from '@tools/tailwind'
import { CharacterCard } from '@uikit/molecules/rows'

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
      contentContainerStyle={tw`px-4 pt-4`}
      indicatorStyle="black"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => `character-${index}`}
      {...props}
      estimatedItemSize={100}
      data={characters}
      renderItem={({ item }) => (
        <CharacterCard
          data={{
            name: item.name,
            birth_year: item.birth_year,
            gender: item.gender,
            homeworldName: item.homeworld.name,
          }}
          onPress={() => onPressCharacter?.(item.url)}
        />
      )}
    />
  )
}

export default CharacterList
