import tw from '@tools/tailwind'
import { Animation } from '@uikit/atoms'
import React from 'react'
import { View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const FavouritesScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <Animation name="ArrowBack" style={tw.style({ height: hp(80) })} />
    </View>
  )
}

export default FavouritesScreen
