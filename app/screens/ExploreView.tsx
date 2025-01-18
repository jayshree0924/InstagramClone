import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import users from '../users.json'
import NavBar from '../constants/NavCons';


export default function Explore(/*{ route }*/) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (text: string) => {
        setSearchQuery(text);

        if (text.trim() === '') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                user.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    const renderUserItem = ({ item }: { item: { id: number; name: string; image: string, title: string } }) => (

        <TouchableOpacity style={styles.userItem}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={styles.userImage} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ marginTop: 10, fontSize: 20, color: '#fff', fontFamily: 'Regular' }}>{item.name}</Text>
                    <Text style={{ fontSize: 20, color: '#888', fontFamily: 'Regular' }}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );

    return (
        <View style={styles.container}>
            <View style={styles.searchInput}>
                <Ionicons name='search-outline' color={'#aaa'} size={20} style={{ marginTop: 10, marginRight: 5, marginLeft: 5 }} />
                <TextInput
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    cursorColor={"white"}
                    style={{ color: '#fff', flex: 1 }}
                >
                </TextInput>
            </View>
            <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUserItem}
                style={styles.listContainer}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No users found</Text>
                }
            />
            <NavBar />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    searchInput: {
        backgroundColor: '#212121',
        width: '95%',
        marginTop: 10,
        marginLeft: 10,
        height: 45,
        borderRadius: 14,
        paddingLeft: 10,
        fontSize: 18,
        color: '#aaa',
        flexDirection: 'row'
    },
    listContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    userItem: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    userName: {
        fontSize: 15,
        color: '#aaa',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
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
