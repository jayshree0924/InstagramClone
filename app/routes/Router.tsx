import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {AppwriteContext} from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export default function Router() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext)

    useEffect(() => {
        appwrite
        .getCurrentUser()
        .then(response => {
            setIsLoading(false)
            if (response) {
                setIsLoggedIn(true)
            }
        })
        .catch(_ => {
            setIsLoading(false)
            setIsLoggedIn(false)
        })
    }, [appwrite, setIsLoggedIn])
    

  return (
    <View>
      <Text>Router</Text>
    </View>
  )
}