import type { CharacterShortData } from '@models/characters'
import useStore from '@stores'
import tw from '@tools/tailwind'
import { CharacterList } from '@uikit/organisms'
import { observer } from 'mobx-react-lite'
import { Text, View } from 'react-native'

const FavouritesScreen = () => {
  const { favoritesStore } = useStore()

  const onPressCard = (data: CharacterShortData) => {
    favoritesStore.updateFavoriteCharacters(data)
    // TODO
    // navigation.navigate('CharacterInfo', { url })
  }

  return (
    <View style={tw`flex-1`}>
      <Text
        style={tw`self-center text-white text-base font-semibold`}
        onPress={() => {
          favoritesStore.clearAll()
        }}
      >
        {`Female Fans: ${favoritesStore.genderRecalculation.female}\tMale Fans: ${favoritesStore.genderRecalculation.male}\tOthers Fans: ${favoritesStore.genderRecalculation.others}`}
      </Text>
      {/* // TODO <Animation name="ArrowBack" style={tw.style({ height: hp(80) })} /> */}
      <CharacterList
        data={favoritesStore.characters}
        onPressCard={onPressCard}
      />
    </View>
  )
}

export default observer(FavouritesScreen)
