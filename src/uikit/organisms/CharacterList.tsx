import type { CharacterShortData } from '@models/characters'
import { FlashList, type FlashListProps } from '@shopify/flash-list'
import tw from '@tools/tailwind'
import { CharacterCard } from '@uikit/molecules/rows'

export interface CharacterListProps
  extends Partial<FlashListProps<CharacterShortData>> {
  onPressCard?: (data: CharacterShortData) => void
}

const CharacterList = ({
  data = [],
  onPressCard,
  ...props
}: CharacterListProps) => {
  return (
    <FlashList
      indicatorStyle="white"
      estimatedItemSize={200}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw`px-4 pt-4`}
      nestedScrollEnabled
      {...props}
      data={data}
      keyExtractor={(_, index) => `character-${index}`}
      renderItem={({ item }) => (
        <CharacterCard data={item} onPress={() => onPressCard?.(item)} />
      )}
    />
  )
}

export default CharacterList
