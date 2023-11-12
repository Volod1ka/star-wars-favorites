import type { CharacterShortData } from '@models/characters'
import { FlashList, type FlashListProps } from '@shopify/flash-list'
import tw from '@tools/tailwind'
import { CharacterCard } from '@uikit/molecules/rows'

export type CharacterListProps = Partial<FlashListProps<CharacterShortData>> & {
  onPressCharacter?: (data: CharacterShortData) => void
}

const CharacterList = ({
  data = [],
  onPressCharacter,
  ...props
}: CharacterListProps) => {
  return (
    <FlashList
      indicatorStyle="white"
      estimatedItemSize={50}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw`px-4 pt-4`}
      // TODO
      // ListEmptyComponent={<Text style={tw`text-white`}>No DATA</Text>}
      {...props}
      data={data}
      keyExtractor={(_, index) => `character-${index}`}
      renderItem={({ item }) => (
        <CharacterCard data={item} onPress={() => onPressCharacter?.(item)} />
      )}
    />
  )
}

export default CharacterList
