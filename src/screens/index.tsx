import {
  TransitionPresets,
  createStackNavigator,
  type StackScreenProps,
} from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

const Stack = createStackNavigator<RootStackParamList>()

const EmptyScreen = () => <></>

const RootRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={EmptyScreen} />
    </Stack.Navigator>
  )
}

export default RootRouter
