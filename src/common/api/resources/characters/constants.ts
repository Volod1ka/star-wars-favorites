export const charactersKeys = {
  root: ['characters'] as const,
  person: (url: string) => ['character', url] as const,
}

export const charactersUrls = {
  root: (page: number) => ['people', `?page=${page}`],
}

export const INIT_PAGE: number = 1
export const PAGE_ITERATION: number = 1
