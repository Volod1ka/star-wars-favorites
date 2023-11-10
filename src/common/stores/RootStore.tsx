import React, { createContext, useContext, type FC } from 'react'

export class RootStore {
  constructor() {}
}

export const StoreContext = createContext(new RootStore())

const store = new RootStore()

export const StoreProvider: FC<{
  children?: React.ReactNode
}> = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
export default useStore
