import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import PostSection from '../custom/PostSectionView';
import Story from '../custom/StoryView';
import NavBar from '../../constants/NavCons';
import { useFonts } from 'expo-font';
import axios from 'axios';


export default function HomeScreen(/*{ route }*/) {
    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });
    // const { username } = route.params;

    const navigation = useNavigation()

    const inbox = () => {
        navigation.navigate('Inbox', {})
    }

    const notification = () => {
        navigation.navigate('Notification', {})
    }

    // const searchMovies = async() => {
    //     const response = await axios.get("")
    //     console.log(response)
    // }

    // const getMovieDetails = async() => {
    //     const response = await axios.get("")
    //     console.log(response)
    // }

    return (

        // <View style={styles.container}>
        //     <Text style={styles.text}>Welcome, {username}!</Text>
        // </View>
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10, marginRight: 5 }}>
                    <Text style={{ color: 'white', fontSize: 30, flex: 1, fontFamily: 'Italic' }}>Instagram</Text>
                    <TouchableOpacity onPress={notification}>
                        <Ionicons
                            name='heart-outline'
                            color={'white'}
                            size={30}
                            style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={inbox}>
                        <Ionicons
                            name='chatbubble-ellipses-outline'
                            color={'white'}
                            size={30}
                            style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Story />
                <PostSection />
            </ScrollView>
            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        margin: 0,
        padding: 0,
    },
    icon: {
        margin: 5
    },
});
