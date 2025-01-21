import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

export default function SplashScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/instagram.png')} style={styles.loader} />
      <Text style={styles.text}>from</Text>
      <Image source={require('../../assets/meta1.png')} style={styles.meta} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 80,
    width: 80,
  },
  text: {
    color: '#555',
    fontSize: 15,
    top: 295
  },
  meta: {
    height: 20,
    width: 100,
    top: 300
  }
})