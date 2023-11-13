import tw from '@tools/tailwind'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

export interface OutlinedButtonProps
  extends Pick<TouchableOpacityProps, 'onPress' | 'disabled' | 'style'> {
  title: string
}

const OutlinedButton = ({
  title,
  disabled,
  onPress,
  style,
}: OutlinedButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={tw.style(
        'py-2 px-8 bg-black rounded-full border-2 border-golden',
        style as object,
        {
          'opacity-30': !!disabled,
        },
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={tw`font-bold text-white text-base text-center`}>
        {title.toLocaleUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default OutlinedButton
