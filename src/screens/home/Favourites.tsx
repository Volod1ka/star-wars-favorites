import type { CharacterShortData } from '@models/characters'
import { useNavigation } from '@react-navigation/native'
import type { RootStackScreenProps } from '@screens'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { FansCounter } from '@uikit/molecules'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

const FavouritesScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>['navigation']>()

  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    navigation.navigate('CharacterInfo', { url: data.url })
  }

  const onSelectFavorite = (data: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(data)
  }

  return (
    <View style={tw`flex-1`}>
      <FansCounter quantity={favoritesStore.genderRecalculation} />

      <CharacterList
        contentContainerStyle={tw`px-4 pb-1`}
        data={[...favoritesStore.characters]}
        onPressCard={onPressCard}
        onSelectFavorite={onSelectFavorite}
      />
    </View>
  )
}

export default observer(FavouritesScreen)
