import type { Character } from '@models/characters'
import tw from '@tools/tailwind'
import { memo } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from 'react-native'

export type CharacterCardData = Pick<
  Character,
  'name' | 'birth_year' | 'gender'
> & {
  homeworldName: Character['homeworld']['name']
}

export type CharacterCardProps = Pick<TouchableOpacityProps, 'onPress'> & {
  data: CharacterCardData
  selected?: boolean
}

const NotchContainer = () => (
  <View style={tw`flex-row justify-between`}>
    <View
      style={tw`w-1/2 h-0 border-t-[14px] border-r-[14px] border-r-transparent border-t-primary-dark`}
    />
    <View
      style={tw`w-1/4 h-0 border-t-[14px] border-l-[14px] border-l-transparent border-t-primary-dark`}
    />
  </View>
)

const CharacterCard = ({ data, selected, onPress }: CharacterCardProps) => {
  return (
    <TouchableOpacity
      style={tw`mb-4 rounded-lg overflow-hidden`}
      onPress={onPress}
    >
      <View style={tw`p-4 bg-primary-dark`}>
        <Text style={tw`font-semibold text-base text-white`} numberOfLines={1}>
          {`${data.name} | ${data.homeworldName}`}
        </Text>
      </View>

      <View style={tw`flex-row justify-between bg-secondary-dark`}>
        <View
          style={tw`w-1/3 h-0 border-t-[50px] border-r-[50px] border-r-transparent border-t-primary-dark `}
        />

        <View style={tw`flex-1 p-4`}>
          <Text style={tw`font-medium text-sm text-white`} numberOfLines={1}>
            {`Birth year: ${data.gender}`}
          </Text>
          <Text style={tw`font-medium text-sm text-white`} numberOfLines={1}>
            {`Birth year: ${data.birth_year}`}
          </Text>
        </View>
      </View>

      <NotchContainer />
    </TouchableOpacity>
  )
}

export default memo(
  CharacterCard,
  (prev, next) => prev.selected === next.selected && prev.data === next.data,
)
