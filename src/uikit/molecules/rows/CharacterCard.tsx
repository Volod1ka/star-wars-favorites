import type { CharacterShortData } from '@models/characters'
import tw from '@tools/tailwind'
import { NotchContainer } from '@uikit/atoms'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'

export type CharacterCardProps = Pick<TouchableOpacityProps, 'onPress'> & {
  data: CharacterShortData
}

const CharacterCard = ({ data, onPress }: CharacterCardProps) => {
  const { t } = useTranslation()

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={tw`mb-4 rounded-lg overflow-hidden`}
      onPress={onPress}
    >
      <View style={tw`p-4 bg-primary-dark`}>
        <Text style={tw`font-bold text-base text-white`} numberOfLines={1}>
          {`${data.name} | ${data.homeworldName}`}
        </Text>
        <Text style={tw`font-medium text-sm text-white`} numberOfLines={1}>
          {`${data.gender}`}
        </Text>
      </View>

      <View style={tw`flex-row justify-between bg-secondary-dark`}>
        <View
          style={tw`w-1/3 h-0 border-t-[50px] border-r-[50px] border-r-transparent border-t-primary-dark `}
        />

        <View style={tw`flex-1 p-4 pt-10`}>
          <Text
            style={tw`font-medium text-sm text-white text-right`}
            numberOfLines={1}
          >
            {t('ui.card.birth_year', { date: data.birth_year })}
          </Text>
        </View>
      </View>

      <NotchContainer />
    </TouchableOpacity>
  )
}

export default memo(
  CharacterCard,
  (prev, next) => JSON.stringify(prev.data) === JSON.stringify(next.data),
)
