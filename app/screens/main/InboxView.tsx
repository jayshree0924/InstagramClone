import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Dms from '../custom/DmsView';
import Notes from '../custom/NotesView';
import { useFonts } from 'expo-font';


export default function Inbox() {

    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });

    const navigation = useNavigation()

    const arrow = () => {
        navigation.navigate('HomeScreen', {})
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginTop: 10 }}>
                    <TouchableOpacity onPress={arrow}>
                        <Ionicons
                            name='arrow-back-outline'
                            color={'white'}
                            size={30}
                            style={{ margin: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Regular', flex: 1 }}>_username_</Text>
                    <TouchableOpacity>
                        <Ionicons
                            name='create-outline'
                            color={'white'}
                            size={30} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity><View style={styles.search}>
                    <Ionicons
                        name='search-outline'
                        color={'#999'}
                        size={20}
                        style={{ top: 12, left: 15 }} />
                    <TextInput placeholder='Search...' placeholderTextColor={'#999'} style={styles.searchText} />
                </View>
                </TouchableOpacity>

                <Notes />

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>Messages</Text>
                    <TouchableOpacity><Ionicons name='notifications-off-outline' color={'white'} size={15} style={{ padding: 5 }} /></TouchableOpacity>
                    <TouchableOpacity><Text style={{ fontSize: 15, color: '#3892ff', left: 185 }}>Requests</Text></TouchableOpacity>
                </View>

                <Dms />

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingLeft: 10
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#222',
        marginLeft: 5,
        marginRight: 15,
        top: 10,
        borderRadius: 15
    },
    searchText: {
        color: 'white',
        fontSize: 15,
        left: 20,
        flex: 1
    },
    msgImage: {
        height: 60,
        width: 60,
        borderRadius: 50,

    }
});
