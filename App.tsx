import { QueryClientProvider } from '@api/queryClient'
import '@i18n'
import { NavigationContainer } from '@react-navigation/native'
import RootRouter from '@screens'
import { StoreProvider } from '@stores/RootStore'
import tw from '@tools/tailwind'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'

const Root = observer(() => {
  return <RootRouter />
})

const App = () => {
  return (
    <StoreProvider>
      <QueryClientProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={tw`flex-1`}>
            <NavigationContainer>
              <StatusBar
                backgroundColor={tw.color('bg-black')}
                barStyle="light-content"
              />
              <Root />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </StoreProvider>
  )
}

export default App
