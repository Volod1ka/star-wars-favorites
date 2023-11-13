import { useCharacterQuery } from '@api'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import { Label, Separator } from '@uikit/atoms'
import { LoadingBanner } from '@uikit/molecules'
import { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { toStringFilms, toStringNamesOfList } from './tools'

const CharacterInfoScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()
  const {
    params: { url },
  } = useRoute<RootStackScreenProps<'CharacterInfo'>['route']>()

  const characterQuery = useCharacterQuery(url)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: characterQuery.isFetched
        ? characterQuery.data?.name || ''
        : 'Loading...',
    })
  }, [characterQuery.isFetched])

  if (!characterQuery.data) {
    return <LoadingBanner />
  }

  return (
    <ScrollView style={tw`flex-1`} contentContainerStyle={tw`p-4 pb-8`}>
      <Text style={tw`font-bold text-2xl text-white`}>
        {characterQuery.data.name}
      </Text>
      <Text
        style={tw`mb-2 font-medium text-sm text-white`}
      >{`Gender: ${characterQuery.data.gender}\nBirth year: ${characterQuery.data.birth_year}`}</Text>

      <Separator />

      <Label
        title={'Appearances'}
        description={toStringFilms(characterQuery.data.films)}
      />

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={'Appearance'}
          description={`Eye color: ${characterQuery.data.eye_color}\nHair color: ${characterQuery.data.hair_color}\nSkin color: ${characterQuery.data.skin_color}`}
        />
        <Label
          title={'Dimensions'}
          description={`Height: ${characterQuery.data.height}cm\nMass: ${characterQuery.data.mass}kg`}
        />
      </View>

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={'Home world'}
          description={characterQuery.data.homeworld.name}
        />
        <Label
          title={'Species'}
          description={toStringNamesOfList(characterQuery.data.species)}
        />
      </View>

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={'Starships'}
          description={toStringNamesOfList(characterQuery.data.starships)}
        />
        <Label
          title={'Vehicle'}
          description={toStringNamesOfList(characterQuery.data.vehicles)}
        />
      </View>
    </ScrollView>
  )
}

export default CharacterInfoScreen
