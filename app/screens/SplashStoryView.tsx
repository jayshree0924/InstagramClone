import { StyleSheet, Image, View, Text, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pim, Sim } from '@/app/constants/ImageCons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SplashStory() {

  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Pim.girl} style={styles.img}>
        <View style={styles.imgContainer}>
          <Image source={Pim.anklet} style={{ height: 40, width: 40, borderRadius: 50 }} />
          <Text style={{ color: 'white', fontSize: 13, marginTop: 10, marginLeft: 10 }}>Username</Text>
        </View>
      </ImageBackground>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginLeft: 15, marginRight: 15 }}>
        <Ionicons name='chatbubble-outline' color={'white'} size={30} style={styles.icon} />
        <View style={{borderColor: '#888', borderWidth: 1, borderRadius: 50}}>
          <TextInput placeholder='Message' placeholderTextColor={'#888'} cursorColor={'white'} style={styles.message} />
        </View>
        <Ionicons name='heart-outline' color={'white'} size={30} style={styles.icon} />
        <Ionicons name='paper-plane-outline' color={'white'} size={30} style={styles.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    height: '99%',
    width: '100%',
    justifyContent: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    marginBottom: 640,
    marginLeft: 10,
  },
  icon: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  },
  message: {
    width: 245,
    marginLeft: 10,
  }
})