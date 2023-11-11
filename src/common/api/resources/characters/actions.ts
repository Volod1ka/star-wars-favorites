import httpClient from '@api/httpClient'
import type {
  Character,
  CharacterExtraInfo,
  CharacterListResponseData,
  CharacterResponseData,
  CharacterUrlsResponseData,
  CharactersResponseData,
} from '@models/characters'
import type { Film } from '@models/films'
import type { Homeworld } from '@models/homeworld'
import type { Specie } from '@models/species'
import type { Starship } from '@models/starships'
import type { Vehicle } from '@models/vehicles'
import { keyToUrl } from '@tools/common'
import { fetchArrayOfUrl, isBaseUrlOfApi } from '@tools/url'
import axios from 'axios'
import { INIT_PAGE, charactersUrls } from './constants'

const getCharacters = async (
  pageParam: number = INIT_PAGE,
): Promise<CharacterListResponseData> => {
  const response = await httpClient.get<CharactersResponseData>(
    keyToUrl(charactersUrls.root(pageParam)),
  )

  const characters: Character[] = await Promise.all(
    response.data.results.map(async item => {
      const homeworldResponse = await axios.get<Homeworld>(item.homeworld)
      const extraData: CharacterExtraInfo = {
        homeworld: homeworldResponse.data,
        films: [],
        species: [],
        vehicles: [],
        starships: [],
      }

      return { ...item, ...extraData }
    }),
  )

  return {
    characters,
    count: response.data.count,
    hasNextPage: !!response.data.next,
  }
}

const getCharacter = async (url: string): Promise<Character | null> => {
  if (!isBaseUrlOfApi(url)) return null

  const response = await axios.get<CharacterResponseData>(url)
  const extraData = await getCharacterUrlDetails(response.data)

  return { ...response.data, ...extraData }
}

const getCharacterUrlDetails = async (
  data: CharacterUrlsResponseData,
): Promise<CharacterExtraInfo> => {
  const [
    filmsResponse,
    homeworldResponse,
    speciesResponse,
    starshipsResponse,
    vehiclesResponse,
  ] = await Promise.all([
    fetchArrayOfUrl<Film>(data.films),
    axios.get<Homeworld>(data.homeworld),
    fetchArrayOfUrl<Specie>(data.species),
    fetchArrayOfUrl<Starship>(data.starships),
    fetchArrayOfUrl<Vehicle>(data.vehicles),
  ])

  return {
    films: filmsResponse.map(film => film.data),
    homeworld: homeworldResponse.data,
    species: speciesResponse.map(specie => specie.data),
    starships: starshipsResponse.map(starship => starship.data),
    vehicles: vehiclesResponse.map(vehicles => vehicles.data),
  }
}

export default {
  getCharacters,
  getCharacterUrlDetails,
  getCharacter,
}
