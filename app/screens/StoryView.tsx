import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { Sim } from '@/constants/ImageCons'
import { Pim } from '@/constants/ImageCons'
import { useNavigation } from 'expo-router';

export default function Story() {

    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });


    // interface BoxItem {
    //     id: string
    //     name: string
    //     image: string
    // }

    // const data: BoxItem[] = [
    //     { id: '1', name: 'vector1', image: require('../../assets/instagram.png') },
    //     { id: '1', name: 'vector1', image: require('../../assets/instagram.png') },
    // ];

    // const BoxList: React.FC = () => {
    //     return <FlatList
    //         data={data}
    //         numColumns={10}
    //         renderItem={({ item }) => (
    //             <ScrollView horizontal>
    //                 <View style={{ flexDirection: 'column' }}>
    //                     <TouchableOpacity><Image source={item.image} style={styles.story} /></TouchableOpacity>
    //                     <Text style={{ color: 'white' }}>{item.name}</Text>
    //                 </View>
    //             </ScrollView>
    //         )}
    //         keyExtractor={(item) => item.id} />;
    // };

    // return (
    //     <View style={{ height: 120, borderBottomWidth: 1, borderBottomColor: '#212121' }}>
    //         <BoxList />
    //     </View>
    // )

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('SplashStory', {})
    }

    return (
        <View style={{ height: 120, borderBottomWidth: 1, borderBottomColor: '#212121' }}>
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.girl} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.anklet} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.beach} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.astronaut} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.bandana} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.dock} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.rings} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.subway} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.ferris} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.cafe} style={styles.storyImage} /></TouchableOpacity>
                        <Text style={styles.storyName}>Username</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'green',
        padding: 2.5,
        marginRight: 2
    },
    storyImage: {
        height: 63, 
        width: 63, 
        borderRadius: 50
    },
    storyName: {
        color: 'white',
        fontFamily: 'Regular',
        fontSize: 20,
        marginTop: 3
    }

})