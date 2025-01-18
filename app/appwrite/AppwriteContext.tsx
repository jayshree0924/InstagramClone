// import { StyleSheet, Text, View } from 'react-native'
// import React, { createContext, FC, PropsWithChildren, useState } from 'react'

// import Appwrite from './service'
// import { IconSymbolName } from '@/app-example/components/ui/IconSymbol';

// type AppContextType = {
//     appwrite: Appwrite;
//     isLoggedIn: boolean;
//     setIsLoggedIn: (isLoggedIn: boolean) => void;
// }

// export const AppwriteContext = createContext<AppContextType>({
//     appwrite: new Appwrite(),
//     isLoggedIn: false,
//     setIsLoggedIn: () => {}
// })

// export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const defaultValue = {

//     }
//   return (
//     <AppwriteContext.Provider value={defaultValue}>
//       {children}
//     </AppwriteContext.Provider>
//   )
// }

// export default AppwriteContext

// const styles = StyleSheet.create({})