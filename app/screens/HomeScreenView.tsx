import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import PostSection from './PostSectionView';
import Story from './StoryView';


export default function HomeScreen(/*{ route }*/) {
    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });

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


    // const { username } = route.params;

    return (
        
        // <View style={styles.container}>
        //     <Text style={styles.text}>Welcome, {username}!</Text>
        // </View>

        <View style={styles.container}>
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, marginRight: 10}}>
                    <Text style={{ color: 'white', fontSize: 30, flex: 0.999, fontFamily: 'Italic' }}>Instagram</Text>
                    <TouchableOpacity><Ionicons name='heart-outline' color={'white'} size={30} style={styles.icon} /></TouchableOpacity>
                    <TouchableOpacity><Ionicons name='chatbubble-ellipses-outline' color={'white'} size={30} style={styles.icon} /></TouchableOpacity>
                </View>
                <Story />
                <PostSection />
            </ScrollView>
            <View style={styles.nav}>
                <TouchableOpacity onPress={homePress}><Ionicons name='home-outline' color={'white'} size={30} /></TouchableOpacity>
                <TouchableOpacity onPress={explorePress}><Ionicons name='search-outline' color={'white'} size={30} /></TouchableOpacity>
                <TouchableOpacity onPress={profilePress}><Ionicons name='person-outline' color={'white'} size={30} /></TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     fontSize: 20,
    // },

    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    story: {
        marginTop: 10,
        marginRight: 10,
        height: 70,
        width: 70,
        borderRadius: 50
    },
    icon: {
        margin: 5
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

});
