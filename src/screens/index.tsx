import {
  TransitionPresets,
  createStackNavigator,
  type StackScreenProps,
} from '@react-navigation/stack'
import tw from '@tools/tailwind'
import CharacterInfoScreen from './CharacterInfo'
import HomeTabScreen from './home'

export type RootStackParamList = {
  Home: undefined
  CharacterInfo: { id: string }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

const Stack = createStackNavigator<RootStackParamList>()

const RootRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        cardStyle: tw`bg-gray-400`,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={HomeTabScreen} />

      <Stack.Screen
        name="CharacterInfo"
        component={CharacterInfoScreen}
        options={{ headerShown: true, headerTitle: '' }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
