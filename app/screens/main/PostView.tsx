import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pim } from '@/app/constants/ImageCons';
import { useFonts } from 'expo-font';
import { useNavigation } from 'expo-router';

export default function Post() {
    const [fontsLoaded] = useFonts({
        Italic: require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        Regular: require('../../assets/fonts/Glametrix-oj9A.otf'),
        Light: require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        Bold: require('../../assets/fonts/GlametrixBold-4dW6.otf'),
    });

    const [hearts, setHearts] = useState<{ [key: string]: boolean }>({});
    const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>({});
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleHeart = (id: string) => {
        setHearts((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleBookmark = (id: string) => {
        setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleLongPress = (id: string) => {
        toggleHeart(id);
    };

    const navigation = useNavigation();
    const arrow = () => {
        navigation.navigate('Profile', {})
    }

    const data = [
        { id: '1', name: 'Alice Jhonson', image: Pim.wall, song: " Andrea Vanzo • Valzer d'Invento", post: Pim.dior, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 day ago' },
        { id: '2', name: 'Alice Jhonson', image: Pim.wall, song: " Tahiti • Love Story", post: Pim.bracelets, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '17 January 2025' },
        { id: '3', name: 'Alice Jhonson', image: Pim.wall, song: " Rosa Linn • SNAP", post: Pim.subway, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '27 December 2024' },
    ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginTop: 10, backgroundColor: 'black' }}>
                <TouchableOpacity onPress={arrow}>
                    <Ionicons
                        name='arrow-back-outline'
                        color={'white'}
                        size={30}
                        style={{ margin: 5 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Regular', flex: 1 }}>alice_jhonson</Text>
                <TouchableOpacity>
                    <Ionicons
                        name='create-outline'
                        color={'white'}
                        size={30} />
                </TouchableOpacity>
            </View>
            <FlatList data={data} renderItem={({ item }: { item: typeof data[0] }) => (
                <View style={styles.post}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={item.image} style={styles.profileImage} />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <TouchableOpacity>
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons
                                    name="musical-notes"
                                    color="white"
                                    size={12}>
                                    <Text style={styles.song}>{item.song}</Text>
                                </Ionicons>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Ionicons
                                name="ellipsis-vertical"
                                color="white"
                                size={18}
                                style={styles.moreIcon} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={1}
                        onLongPress={() => handleLongPress(item.id)}
                        delayLongPress={300}
                    >
                        <Image source={item.post} style={styles.image} />
                    </TouchableOpacity>

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => toggleHeart(item.id)}>
                            <Ionicons
                                name={hearts[item.id] ? 'heart' : 'heart-outline'}
                                color={hearts[item.id] ? 'red' : 'white'}
                                size={33}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons
                                name="chatbubble-outline"
                                color="white"
                                size={30}
                                style={styles.actionIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons
                                name="paper-plane-outline"
                                color="white"
                                size={30}
                                style={styles.actionIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
                            <Ionicons
                                name={bookmarks[item.id] ? 'bookmark' : 'bookmark-outline'}
                                color="white"
                                size={30}
                                style={{ left: 210 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.likedBy}>
                        Liked by <Text style={styles.bold}>{item.username}</Text> and others
                    </Text>
                    <Text style={styles.caption}>
                        <Text style={styles.bold}>{item.name} </Text>
                        {item.caption}
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.comments}>{item.comments}</Text>
                    </TouchableOpacity>
                    <Text style={styles.uploadTime}>{item.uploadTime}</Text>
                </View>
            )}
                keyExtractor={(item) => item.id} />
            <Modal
                visible={isModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', height: 70 }}>
                                <Ionicons
                                    name='bookmark-outline'
                                    size={30}
                                    color={'white'}>
                                    <Text style={{ fontSize: 15 }}>{'\n'}Save</Text>
                                </Ionicons>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', height: 70 }}>
                                <Ionicons
                                    name='qr-code-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ alignContent: 'center' }} ><Text style={{ fontSize: 15 }}>{'\n'}QR Code</Text>
                                </Ionicons>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }} >
                                <Ionicons
                                    name='paper-plane-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <View>
                                    <Text style={{ fontSize: 12, color: 'white' }}>We're moving things around!</Text>
                                    <Text style={{ fontSize: 12, color: '#176bf4' }}>See where to share and link</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }} >
                                <Ionicons
                                    name='star-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <Text style={{ fontSize: 15, color: 'white', top: 5 }}>Add to favourites</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }} >
                                <Ionicons
                                    name='person-remove-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <Text style={{ fontSize: 15, color: 'white', top: 5 }}>Unfollow</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }} >
                                <Ionicons
                                    name='information-circle-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <Text style={{ fontSize: 15, color: 'white', top: 5 }}>Why you're seeing this post?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }} >
                                <Ionicons
                                    name='eye-off-outline'
                                    size={30}
                                    color={'white'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <Text style={{ fontSize: 15, color: 'white', top: 5 }}>Hide</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginVertical: 15 }} >
                                <Ionicons
                                    name='alert-circle-outline'
                                    size={30}
                                    color={'crimson'}
                                    style={{ marginRight: 20 }}>
                                </Ionicons>
                                <Text style={{ fontSize: 15, color: 'crimson', top: 5 }}>Report</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    post: {
        width: '100%',
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: 15,
    },
    headerText: {
        flex: 0.98,
    },
    name: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Bold',
    },
    song: {
        fontSize: 12,
        color: 'white',
        marginLeft: 5,
    },
    moreIcon: {
        marginTop: 10,
    },
    image: {
        height: 300,
        width: '100%',
    },
    actions: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    actionIcon: {
        marginRight: 10,
        flex: 1,
    },
    likedBy: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Regular',
        marginLeft: 10,
    },
    bold: {
        fontFamily: 'Bold',
    },
    caption: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Regular',
        marginLeft: 10,
    },
    comments: {
        color: '#aaa',
        fontSize: 18,
        fontFamily: 'Regular',
        marginLeft: 10,
    },
    uploadTime: {
        color: '#aaa',
        fontSize: 18,
        fontFamily: 'Regular',
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#222',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});