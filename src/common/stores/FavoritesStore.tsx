import type { CharacterShortData } from '@models/characters'
import type { Gender, GenderRecalculation } from '@models/stores'
import type { RootStore } from '@stores/RootStore'
import { makeAutoObservable } from 'mobx'

const initGenderRecalculation: GenderRecalculation = {
  female: 0,
  male: 0,
  others: 0,
}

const exceptionOtherGender: Gender[] = ['female', 'male']

export default class FavoritesStore {
  rootStore: RootStore
  characters: CharacterShortData[]
  genderRecalculation: GenderRecalculation

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.characters = []
    this.genderRecalculation = initGenderRecalculation
    makeAutoObservable(this)
  }

  private reduceGenders = (
    sum: number,
    character: CharacterShortData,
    gender: Gender,
  ) => {
    const condition =
      gender === 'others'
        ? !exceptionOtherGender.includes(character.gender as Gender)
        : character.gender === gender

    return sum + Number(condition)
  }

  private sumCharactersByGender = (gender: Gender) =>
    this.characters.reduce(
      (sum, character) => this.reduceGenders(sum, character, gender),
      0,
    )

  private updateGenderRecalculation = () => {
    this.genderRecalculation.female = this.sumCharactersByGender('female')
    this.genderRecalculation.male = this.sumCharactersByGender('male')
    this.genderRecalculation.others = this.sumCharactersByGender('others')
  }

  updateFavoriteCharacters = (favorite: CharacterShortData) => {
    const present = this.characters.some(
      character => character.url === favorite.url,
    )

    if (present) {
      this.characters = this.characters.filter(
        character => character.url !== favorite.url,
      )
    } else {
      this.characters.push(favorite)
    }

    this.updateGenderRecalculation()
  }

  clearAll = () => {
    this.characters = []
    this.genderRecalculation = initGenderRecalculation
  }
}
