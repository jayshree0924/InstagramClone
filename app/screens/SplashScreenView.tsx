import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

export default function SplashScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/instagram.png')} style={styles.loader} />
      <Text style={{ color: '#fff', fontSize: 15, marginTop: 250 }}>from</Text>
      <Image source={require('../../assets/meta1.png')} style={styles.meta} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
  },
  loader: {
    height: 80,
    width: 80,
    marginTop: 360
  },
  meta: {
    height: 20,
    width: 100
  }
})