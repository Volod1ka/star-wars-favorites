import type { CharacterShortData } from '@models/characters'
import { FlashList, type FlashListProps } from '@shopify/flash-list'
import tw from '@tools/tailwind'
import { CharacterCard } from '@uikit/molecules/rows'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'

export interface CharacterListProps
  extends Partial<FlashListProps<CharacterShortData>> {
  onPressCard?: (data: CharacterShortData) => void
  onSelectFavorite?: (data: CharacterShortData) => void
}

const CharacterList = ({
  data = [],
  onPressCard,
  onSelectFavorite,
  ...props
}: CharacterListProps) => {
  const { t } = useTranslation()

  return (
    <FlashList
      indicatorStyle="white"
      estimatedItemSize={200}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw`px-4 pt-4`}
      nestedScrollEnabled
      ListEmptyComponent={
        <Text style={tw`my-4 font-bold text-white text-base text-center`}>
          {t('ui.list.empty')}
        </Text>
      }
      {...props}
      data={data}
      keyExtractor={(_, index) => `character-${index}`}
      renderItem={({ item }) => (
        <CharacterCard
          data={item}
          onPress={() => onPressCard?.(item)}
          onSelectFavorite={onSelectFavorite}
        />
      )}
    />
  )
}

export default CharacterList
