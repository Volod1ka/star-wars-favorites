import type { CharacterShortData } from '@models/characters'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { FansCounter } from '@uikit/molecules'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

const FavouritesScreen = () => {
  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(data)
  }

  return (
    <View style={tw`flex-1`}>
      <FansCounter quantity={favoritesStore.genderRecalculation} />

      <CharacterList
        contentContainerStyle={tw`px-4`}
        data={favoritesStore.characters}
        onPressCard={onPressCard}
      />
    </View>
  )
}

export default observer(FavouritesScreen)

// TODO <Animation name="ArrowBack" style={tw.style({ height: hp(80) })} />
