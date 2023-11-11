export const REG_WITHOUT_MORE_SPACE: RegExp = /^[^\s]+( [^\s]+)*$/
export const REG_URL: RegExp = /^(ftp|http|https):\/\/[^ "]+$/

export const keyToUrl = (args: any): string => args.filter(Boolean).join('/')

export const parseJSONToObject = (data?: string | null) => {
  try {
    if (!data) {
      return
    }
    return JSON.parse(data)
  } catch {
    return data
  }
}
