import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function NavBar(/*{ route }*/) {
    const navigation = useNavigation()
    
        const homePress = () => {
            navigation.navigate('HomeScreen', {})
        }
    
        const explorePress = () => {
            navigation.navigate('Explore', {})
        }
    
        const profilePress = () => {
            navigation.navigate('Profile', {})
        }
    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={homePress}><Ionicons name='home-outline' color={'white'} size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={explorePress}><Ionicons name='search-outline' color={'white'} size={30} /></TouchableOpacity>
            <TouchableOpacity onPress={profilePress}><Ionicons name='person-outline' color={'white'} size={30} /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

});
