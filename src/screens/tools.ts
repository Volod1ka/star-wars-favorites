import { t } from '@i18n'
import type { Film } from '@models/films'
import { numberToRoman } from '@tools/math'

export const getNextLine = (index: number, lastItem: number) =>
  index < lastItem - 1 ? '\n' : ''

export const toStringFilms = (films: Film[]) =>
  films.reduce((prevString, film, index) => {
    const filmInfo = t('screens.character_info.film', {
      film: film.title,
      episode: numberToRoman(film.episode_id),
    })

    return `${prevString}${filmInfo}${getNextLine(index, films.length)}`
  }, '')

export const toStringNamesOfList = <TData extends { name: string }>(
  data: TData[],
) =>
  data.reduce(
    (prevString, item, index) =>
      `${prevString}${item.name}${getNextLine(index, data.length)}`,
    '',
  )
