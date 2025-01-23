import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pim } from '@/app/constants/ImageCons';
import { useFonts } from 'expo-font';

export default function PostSection() {
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

    const data = [
        { id: '1', name: 'Diana Prince', image: Pim.paint, song: " Tahiti • Love Story", post: Pim.coffee, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '2', name: 'George Siem', image: Pim.dior, song: " Rosa Linn • SNAP", post: Pim.subway, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '3', name: 'Hailey Patrick', image: Pim.rings, song: " Flawed Mangoes • Dramamine", post: Pim.ferris, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '4', name: 'Bob Smith', image: Pim.anklet, song: " Aaron Hibell, Alex Wann • set me free", post: Pim.dior, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '5', name: 'William Murphy', image: Pim.beach, song: " Mac DeMarco • Chamber Of Reflection", post: Pim.cafe, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '6', name: 'Charlie Davis', image: Pim.makeup, song: " Steve Lacy • Bad Habit (Sped Up)", post: Pim.beach, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '7', name: 'Emily Grey', image: Pim.cafe, song: " Manu Chao • Me Gustas Tu", post: Pim.night, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '8', name: 'Alice Johnson', image: Pim.wall, song: " Alonzo • Elle t'a tue", post: Pim.bracelets, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '9', name: 'Betty Holland', image: Pim.sea, song: " Luke Willies • everything works out in the end", post: Pim.rings, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
        { id: '10', name: 'Elena Thomas', image: Pim.astronaut, song: " Andrea Vanzo • Valzer d'Invento", post: Pim.sky, username: '_username_', caption: 'Hey there!', comments: 'View all comments', uploadTime: '1 hour ago' },
    ];

    return (
        <>
            <FlatList
                data={data}
                scrollEnabled={false}
                renderItem={({ item }) => (
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
                                    <Ionicons name="musical-notes" color="white" size={12}>
                                        <Text style={styles.song}>{item.song}</Text>
                                    </Ionicons>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Ionicons
                                    name="ellipsis-vertical"
                                    color="white"
                                    size={18}
                                    style={styles.moreIcon}
                                />
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
                                    style={styles.actionIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons
                                    name="paper-plane-outline"
                                    color="white"
                                    size={30}
                                    style={styles.actionIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
                                <Ionicons
                                    name={bookmarks[item.id] ? 'bookmark' : 'bookmark-outline'}
                                    color="white"
                                    size={30}
                                    style={{ left: 220 }}
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
                keyExtractor={(item) => item.id}
            />
            <Modal
                visible={isModalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 80, top: 10 }}>
                                <TouchableOpacity style={{ height: 30 }}>
                                    <View>
                                        <Ionicons
                                            name='bookmark-outline'
                                            size={30}
                                            color={'white'}
                                            style={{ left: 20 }} >
                                        </Ionicons>
                                        <Text style={{ fontSize: 15, color: 'white', left: 15, top: 5}}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 30 }}>
                                    <Ionicons
                                        name='qr-code-outline'
                                        size={30}
                                        color={'white'}
                                        style={{ left: 20 }} >
                                    </Ionicons>
                                    <Text style={{ fontSize: 15, color: 'white', top: 5}}>QR Code</Text>
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
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );

    // return (
    //     <ScrollView>
    //         <View style={styles.container}>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <TouchableOpacity><Image source={Pim.porch} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} /></TouchableOpacity>
    //                     <View style={{ flex: 0.96, }}>
    //                         <TouchableOpacity><Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Diana Prince</Text></TouchableOpacity>
    //                         <TouchableOpacity><Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons></TouchableOpacity>
    //                     </View>
    //                     <TouchableOpacity><Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} /></TouchableOpacity>
    //                 </View>
    //                 <Image source={Pim.makeup} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Diana Prince </Text>Hey there!</Text>
    //                 <TouchableOpacity><Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text></TouchableOpacity>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <TouchableOpacity><Image source={Pim.bandana} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} /></TouchableOpacity>
    //                     <View style={{ flex: 0.96, }}>
    //                         <TouchableOpacity><Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>George Siem</Text></TouchableOpacity>
    //                         <TouchableOpacity><Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons></TouchableOpacity>
    //                     </View>
    //                     <TouchableOpacity><Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} /></TouchableOpacity>
    //                 </View>
    //                 <Image source={Pim.building} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>George Siem </Text>Hey there!</Text>
    //                 <TouchableOpacity><Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text></TouchableOpacity>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <Image source={Pim.dock} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
    //                     <View style={{ flex: 0.96, }}>
    //                         <TouchableOpacity><Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Bob Smith</Text></TouchableOpacity>
    //                         <TouchableOpacity><Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons></TouchableOpacity>
    //                     </View>
    //                     <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
    //                 </View>
    //                 <Image source={Pim.anklet} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Bob Smith </Text>Hey there!</Text>
    //                 <TouchableOpacity><Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text></TouchableOpacity>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <Image source={Pim.paint} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
    //                     <View style={{ flex: 0.96, }}>
    //                         <Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Hailey Patrick</Text>
    //                         <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
    //                     </View>
    //                     <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
    //                 </View>
    //                 <Image source={Pim.night} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Hailey Patrick </Text>Hey there!</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <Image source={Pim.cafe} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
    //                     <View style={{ flex: 0.96, }}>
    //                         <Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Emily Grey</Text>
    //                         <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
    //                     </View>
    //                     <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
    //                 </View>
    //                 <Image source={Pim.coffee} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Emily Grey </Text>Hey there!</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <Image source={Pim.astronaut} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
    //                     <View style={{ flex: 0.96, }}>
    //                         <Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Charlie Davis</Text>
    //                         <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
    //                     </View>
    //                     <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
    //                 </View>
    //                 <Image source={Pim.sea} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Charlie Davis </Text>Hey there!</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>

    //             <View style={styles.post}>
    //                 <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
    //                     <Image source={Pim.girl} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
    //                     <View style={{ flex: 0.96, }}>
    //                         <Text style={{ fontSize: 20, color: 'white', margin: 1, fontFamily: 'Bold' }}>Alice Jhonson</Text>
    //                         <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
    //                     </View>
    //                     <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
    //                 </View>
    //                 <Image source={Pim.bracelets} style={styles.image} />
    //                 <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
    //                     <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
    //                     <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
    //                     <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
    //                 </View>
    //                 <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
    //                 <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Alice Jhonson </Text>Hey there!</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
    //                 <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
    //             </View>
    //             <View style={{ marginTop: 50 }}></View>

    //         </View>
    //     </ScrollView>
    // )

}

const styles = StyleSheet.create({
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
        marginLeft: 5,
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