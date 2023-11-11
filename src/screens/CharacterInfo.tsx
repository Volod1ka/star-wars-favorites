import { useCharacterQuery } from '@api'
import { useRoute } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

const CharacterInfoScreen = () => {
  const {
    params: { url },
  } = useRoute<RootStackScreenProps<'CharacterInfo'>['route']>()

  const characterQuery = useCharacterQuery(url)

  // TODO: remove it during the build UI phase
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {characterQuery.data && (
        <Text>{`CharacterInfoScreen: ${characterQuery.data.name}`}</Text>
      )}
    </View>
  )
}

export default CharacterInfoScreen
