import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Pim } from '@/app/constants/ImageCons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NavBar from '../constants/NavCons'

const Profile = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ marginLeft: 15, marginTop: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Bold', marginBottom: 15, flex: 1 }}>alice_jhonson</Text>
          <TouchableOpacity><Ionicons name='at-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
          <TouchableOpacity><Ionicons name='duplicate-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
          <TouchableOpacity><Ionicons name='settings-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={Pim.wall} style={{ height: 90, width: 90, borderRadius: 50, marginRight: 45 }} />
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.countContainer}>
              <Text style={styles.count}>3</Text>
              <Text style={styles.countText}>posts</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.count}>219</Text>
              <Text style={styles.countText}>followers</Text>
            </View>
            <View style={styles.countContainer}>
              <Text style={styles.count}>125</Text>
              <Text style={styles.countText}>following</Text>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 23, color: 'white', fontFamily: 'Bold' }}>Alice Jhonson</Text>
        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'Regular' }}>ALICE JHONSON</Text>

        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 20 }}>
          <TouchableOpacity style={{ marginRight: 8 }}><Text style={styles.button}>Edit Profile</Text></TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 8 }}><Text style={styles.button}>Share Profile</Text></TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 8 }}><Ionicons name='person-add-outline' size={21} style={styles.button3} /></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity><View style={styles.highlightContainer}><Image source={Pim.cafe} style={styles.highlight} /></View></TouchableOpacity>
          <TouchableOpacity><View style={styles.highlightContainer}><Image source={Pim.ferris} style={styles.highlight} /></View></TouchableOpacity>
          <TouchableOpacity><View style={styles.highlightContainer}><Image source={Pim.dior} style={styles.highlight} /></View></TouchableOpacity>
          <TouchableOpacity><View style={styles.highlightContainer}><Image source={Pim.makeup} style={styles.highlight} /></View></TouchableOpacity>
          <TouchableOpacity><View style={styles.highlightContainer}><Image source={Pim.coffee} style={styles.highlight} /></View></TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginRight: 10 }}>
          <TouchableOpacity><Ionicons name='grid-outline' color={'white'} size={25} /></TouchableOpacity>
          <TouchableOpacity><Ionicons name='pricetag-outline' color={'white'} size={25} /></TouchableOpacity>
          <TouchableOpacity><Ionicons name='bookmark-outline' color={'white'} size={25} /></TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Image source={Pim.dior} style={styles.post} />
        <Image source={Pim.bracelets} style={styles.post} />
        <Image source={Pim.subway} style={styles.post} />
      </View>

      <NavBar />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    color: 'white',
    padding: 7,
    width: 145,
    textAlign: 'center',
    borderRadius: 7
  },
  button3: {
    backgroundColor: '#222',
    color: 'white',
    padding: 7,
    width: 50,
    textAlign: 'center',
    borderRadius: 7
  },
  countContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 24
  },
  count: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Regular'
  },
  countText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Regular'
  },
  highlight: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 3,

  },
  highlightContainer: {
    borderRadius: 50,
    height: 62,
    width: 62,
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
    marginRight: 10
  },
  post: {
    height: 125,
    width: 125
  },
  nav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#212121',
    backgroundColor: 'black',
    flex: 1
  }
})