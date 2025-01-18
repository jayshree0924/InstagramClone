import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreenView';
import HomeScreen from './screens/HomeScreenView';
import ProfileView from './screens/ProfileView';
import RegisterView from './screens/auth/RegisterView';
import ExploreView from './screens/ExploreView';
import SplashStory from './screens/SplashStoryView';
import SplashScreen from './screens/SplashScreenView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterView} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Explore" component={ExploreView} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileView} options={{headerShown: false}}/>
        <Stack.Screen name="SplashStory" component={SplashStory} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}
