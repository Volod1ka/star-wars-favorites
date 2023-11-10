export const REG_WITHOUT_MORE_SPACE: RegExp = /^[^\s]+( [^\s]+)*$/

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
