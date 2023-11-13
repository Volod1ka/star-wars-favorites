import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { CroppedButton } from '@uikit/atoms/buttons'
import { FansCounter } from '@uikit/molecules'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

const FavouritesScreen = () => {
  const { t } = useTranslation()

  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    navigation.navigate('CharacterInfo', { url: data.url })
  }

  const onSelectFavorite = (data: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(data)
  }

  const onPressClearFans = () => {
    favoritesStore.clearAll()
  }

  return (
    <View style={tw`flex-1`}>
      <FansCounter quantity={favoritesStore.genderRecalculation} />

      <CharacterList
        contentContainerStyle={tw`px-4 pb-1`}
        data={favoritesStore.characters}
        onPressCard={onPressCard}
        onSelectFavorite={onSelectFavorite}
      />

      <View
        style={tw`absolute bottom-1 left-0 right-0 items-center`}
        pointerEvents="box-none"
      >
        <CroppedButton
          title={t('ui.list.clear_fans')}
          onPress={onPressClearFans}
        />
      </View>
    </View>
  )
}

export default observer(FavouritesScreen)
