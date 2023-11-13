import { useCharacterQuery } from '@api'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import tw from '@tools/tailwind'
import { Label, Separator } from '@uikit/atoms'
import { LoadingBanner } from '@uikit/molecules'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, View } from 'react-native'
import { toStringFilms, toStringNamesOfList } from './tools'

const CharacterInfoScreen = () => {
  const { t } = useTranslation()

  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()
  const {
    params: { url },
  } = useRoute<RootStackScreenProps<'CharacterInfo'>['route']>()

  const characterQuery = useCharacterQuery(url)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: characterQuery.isFetched
        ? characterQuery.data?.name || ''
        : t('ui.loading.default'),
    })
  }, [characterQuery.isFetched])

  if (!characterQuery.data) {
    return <LoadingBanner />
  }

  const character = characterQuery.data

  return (
    <ScrollView style={tw`flex-1`} contentContainerStyle={tw`p-4 pb-8`}>
      <Text style={tw`font-bold text-2xl text-white`}>{character.name}</Text>
      <Text style={tw`mb-2 font-medium text-sm text-white`}>
        {t('screens.character_info.short_about', {
          gender: character.gender,
          date: character.birth_year,
        })}
      </Text>

      <Separator />

      <Label
        title={t('screens.character_info.appearances')}
        description={toStringFilms(character.films)}
      />

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={t('screens.character_info.appearance')}
          description={t('screens.character_info.appearance_about', {
            eye: character.eye_color,
            hair: character.hair_color,
            skin: character.skin_color,
          })}
        />
        <Label
          title={t('screens.character_info.dimensions')}
          description={t('screens.character_info.dimensions_about', {
            height: character.height,
            mass: character.mass,
          })}
        />
      </View>

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={t('screens.character_info.home_world')}
          description={characterQuery.data.homeworld.name}
        />
        <Label
          title={t('screens.character_info.species')}
          description={toStringNamesOfList(characterQuery.data.species)}
        />
      </View>

      <Separator />

      <View style={tw`flex-row`}>
        <Label
          title={t('screens.character_info.starships')}
          description={toStringNamesOfList(characterQuery.data.starships)}
        />
        <Label
          title={t('screens.character_info.vehicle')}
          description={toStringNamesOfList(characterQuery.data.vehicles)}
        />
      </View>
    </ScrollView>
  )
}

export default CharacterInfoScreen
