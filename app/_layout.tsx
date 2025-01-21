import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import LoginScreen from './screens/auth/LoginScreenView';
import HomeScreen from './screens/main/HomeScreenView';
import ProfileView from './screens/main/ProfileView';
import RegisterView from './screens/auth/RegisterView';
import ExploreView from './screens/main/ExploreView';
import SplashStory from './screens/main/SplashStoryView';
import SplashScreen from './screens/main/SplashScreenView';
import Inbox from './screens/main/InboxView';
import Notification from './screens/main/NotificationView';
import Message from './screens/main/MessageView';
import ForgotPass from './screens/auth/ForgotPassView';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterView} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Explore" component={ExploreView} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileView} options={{ headerShown: false }} />
        <Stack.Screen name="SplashStory" component={SplashStory} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Password" component={ForgotPass} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
}
