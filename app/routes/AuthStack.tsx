import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/auth/LoginScreenView'
import Register from '../screens/auth/RegisterView'

export type AuthStackPramList = {
    Login: undefined;
    Register: undefined;
}

const Stack = createNativeStackNavigator<AuthStackPramList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        // headerBackTitle: false
    }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}