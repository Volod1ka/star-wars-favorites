import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

const CharactersScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const onPressText = () => {
    navigation.navigate('CharacterInfo', { id: '' })
  }

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text onPress={onPressText}>CharactersScreen</Text>
    </View>
  )
}

export default CharactersScreen
