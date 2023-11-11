import axios from 'axios'
import Config from 'react-native-config'
import { REG_URL } from './common'

export const fetchArrayOfUrl = async <TData>(urls: string[]) =>
  Promise.all(urls.map(url => axios.get<TData>(url)))

export const isBaseUrlOfApi = (url: string) =>
  REG_URL.test(url) && url.includes(Config.API_URL)
