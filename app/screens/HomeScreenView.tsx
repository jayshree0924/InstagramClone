import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PostSection from './custom/PostSectionView';
import Story from './custom/StoryView';
import NavBar from '../constants/NavCons';


export default function HomeScreen(/*{ route }*/) {
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
            <NavBar />
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
