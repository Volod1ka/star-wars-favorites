import type { GenderRecalculation } from '@models/stores'
import tw from '@tools/tailwind'
import { Text, View } from 'react-native'

export type FansCounterProps = {
  quantity: GenderRecalculation
}

export type CounterContainerProps = {
  title: string
  count: number
  rightGap?: boolean
}

const CounterContainer = ({
  title,
  count,
  rightGap = false,
}: CounterContainerProps) => (
  <View
    style={tw.style(`flex-1 rounded-lg overflow-hidden`, {
      'mr-2': rightGap,
    })}
  >
    <View
      style={tw`w-1/2 h-0 border-b-[8px] border-r-[8px] border-r-transparent border-b-primary-dark`}
    />

    <View style={tw`py-2 px-3 bg-primary-dark rounded-tr-lg`}>
      <Text
        ellipsizeMode="middle"
        numberOfLines={1}
        style={tw`font-bold text-2xl text-white`}
      >
        {count}
      </Text>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={tw`font-medium text-sm text-center text-white`}
      >
        {title}
      </Text>
    </View>
  </View>
)

const FansCounter = ({ quantity }: FansCounterProps) => {
  return (
    <View style={tw.style(`mb-4 px-4 flex-row w-full`)}>
      <CounterContainer title="Female Fans" count={quantity.female} rightGap />
      <CounterContainer title="Male Fans" count={quantity.male} rightGap />
      <CounterContainer title="Others Fans" count={quantity.others} />
    </View>
  )
}

export default FansCounter
