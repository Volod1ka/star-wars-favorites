import {
  createBottomTabNavigator,
  type BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'
import type { RootStackParamList } from '@screens'
import tw from '@tools/tailwind'
import { useTranslation } from 'react-i18next'
import CharactersScreen from './Characters'
import FavouritesScreen from './Favourites'

export type HomeTabParamList = {
  Characters: undefined
  Favourites: undefined
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    StackScreenProps<RootStackParamList>
  >

const Tab = createBottomTabNavigator<HomeTabParamList>()

const HomeTabScreen = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator
      initialRouteName="Characters"
      sceneContainerStyle={tw`bg-gray-400`}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        tabBarStyle: tw`h-23 rounded-xl mx-5 mb-5 shadow-none`,
        headerShown: false,
        tabBarItemStyle: tw`mx-3 h-18`,
        tabBarLabelStyle: tw`font-bold text-xs`,
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharactersScreen}
        options={{
          title: t('ui.navigation.characters'),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: t('ui.navigation.favourites'),
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabScreen
