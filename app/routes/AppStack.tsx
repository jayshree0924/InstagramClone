import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreenView'

export type AppStackPramList = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackPramList>();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        // headerBackTitle: false
    }}>
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}