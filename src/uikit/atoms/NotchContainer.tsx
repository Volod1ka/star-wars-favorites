import tw from '@tools/tailwind'
import { View } from 'react-native'

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

export default NotchContainer
