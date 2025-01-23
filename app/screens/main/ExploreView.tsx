import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import users from '../../users.json';
import NavBar from '../../constants/NavCons';
import { useFonts } from 'expo-font';

export default function Explore() {
    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (text) => {
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

    const renderUserItem = ({ item }) => (
        <TouchableOpacity style={styles.userItem}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.image }} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userTitle}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 98}}>
                <View style={styles.searchInput}>
                    <Ionicons name="search-outline" color="#aaa" size={20} style={styles.searchIcon} />
                    <TextInput
                        value={searchQuery}
                        onChangeText={handleSearch}
                        placeholder="Search..."
                        placeholderTextColor="#888"
                        cursorColor="white"
                        style={styles.searchTextInput}
                    />
                </View>
                <ScrollView>
                    <FlatList
                        data={filteredUsers}
                        scrollEnabled={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderUserItem}
                        style={styles.listContainer}
                        ListEmptyComponent={<Text style={styles.emptyText}>No users found</Text>}
                    />
                </ScrollView>
            </View>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: 5,
    },
    searchTextInput: {
        color: '#fff',
        flex: 1,
    },
    listContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    userItem: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#111',
        borderRadius: 10,
        marginBottom: 5,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    userName: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Regular',
        marginTop: 10,
    },
    userTitle: {
        fontSize: 20,
        color: '#888',
        fontFamily: 'Regular',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});
