import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Pim } from '@/constants/ImageCons'
import { Sim } from '@/constants/ImageCons'

const PostSection = () => {

    const [isHeartPressed, setIsHeartPressed] = useState('')
    const [isSavePressed, setIsSavePressed] = useState('')
    const [heart, setHeart] = useState('')

    const toggleHeart = () => {
        setIsHeartPressed((prevState) => !prevState);
    };

    const toggleSave = () => {
        setIsSavePressed((prevState) => !prevState);
    };

    const [fontsLoaded] = useFonts({
            'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
            'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
            'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
            'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
        });
    

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.porch} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Diana Prince</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.makeup} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Diana Prince </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.bandana} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>George Siem</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.building} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>George Siem </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.dock} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Bob Smith</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.anklet} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Bob Smith </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.paint} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Hailey Patrick</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.night} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Hailey Patrick </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.cafe} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Emily Grey</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.coffee} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Emily Grey </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.astronaut} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Charlie Davis</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.sea} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Charlie Davis </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>

                <View style={styles.post}>
                    <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
                        <Image source={Pim.girl} style={{ height: 40, width: 40, borderRadius: 50, marginRight: 15 }} />
                        <View style={{flex: 0.96,}}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 1,  fontFamily: 'Bold' }}>Alice Jhonson</Text>
                            <Ionicons name='musical-notes' color={'white'} size={12}> Andrea Vanzo • Valzer d'Invento</Ionicons>
                        </View>
                        <Ionicons name='ellipsis-vertical' color={'white'} size={18} style={{ marginTop: 10 }} />
                    </View>
                    <Image source={Pim.bracelets} style={styles.image} />
                    <View style={{ marginTop: 10, marginBottom: 5, flexDirection: 'row', marginLeft: 10 }}>
                        <TouchableOpacity onPress={toggleHeart}><Ionicons name={isHeartPressed ? 'heart' : 'heart-outline'} color={isHeartPressed ? 'red' : 'white'} size={35} style={{ marginRight: 10, }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='chatbubble-outline' color={'white'} size={30} style={{ marginRight: 10 }} /></TouchableOpacity>
                        <TouchableOpacity><Ionicons name='paper-plane-outline' color={'white'} size={30} style={{ marginRight: 210 }} /></TouchableOpacity>
                        <TouchableOpacity onPress={toggleSave}><Ionicons name={isSavePressed ? 'bookmark' : 'bookmark-outline'} color={'white'} size={30} /></TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>Liked by <Text style={{ fontFamily: 'Bold' }}>_username_</Text> and others</Text>
                    <Text style={{ color: 'white', fontFamily: 'Regular', fontSize: 18, marginLeft: 10 }}><Text style={{ color: 'white', fontFamily: 'Bold' }}>Alice Jhonson </Text>Hey there!</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>View all comments</Text>
                    <Text style={{ color: '#aaa', fontSize: 18, fontFamily: 'Regular', marginLeft: 10 }}>1 hour ago</Text>
                </View>
                <View style={{marginTop: 50}}></View>

            </View>
        </ScrollView>
    )
}

export default PostSection

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    post: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        height: 300,
        width: '100%'
    }
})