import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { Sim } from '@/app/constants/ImageCons'
import { Pim } from '@/app/constants/ImageCons'
import { useNavigation } from 'expo-router';

export default function Story() {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('SplashStory', {})
    }

    const [fontsLoaded] = useFonts({
        'Italic': require('../../assets/fonts/KingsmanDemo-1GVgg.ttf'),
        'Regular': require('../../assets/fonts/Glametrix-oj9A.otf'),
        'Light': require('../../assets/fonts/GlametrixLight-0zjo.otf'),
        'Bold': require('../../assets/fonts/GlametrixBold-4dW6.otf')
    });


    interface BoxItem {
        id: string
        name: string
        image: string
    }

    const data: BoxItem[] = [
        { id: '1', name: 'Alice', image: Pim.wall },
        { id: '2', name: 'George', image: Pim.dior },
        { id: '3', name: 'Diana', image: Pim.paint },
        { id: '4', name: 'Hailey', image: Pim.rings },
        { id: '5', name: 'Bob', image: Pim.anklet },
        { id: '6', name: 'Barbara', image: Pim.dock },
        { id: '7', name: 'Emily', image: Pim.cafe },
        { id: '8', name: 'Charlie', image: Pim.makeup },
        { id: '9', name: 'Betty', image: Pim.ferris },
        { id: '10', name: 'Carrie', image: Pim.coffee },
    ];

    const BoxList: React.FC = () => {
        return <ScrollView horizontal>
            <FlatList
                data={data}
                numColumns={100}
                renderItem={({ item }) => (

                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={handlePress} style={styles.story}>
                            <Image source={item.image} style={styles.storyImage} />
                        </TouchableOpacity>
                        <Text style={styles.storyName}>{item.name}</Text>
                    </View>

                )}
                keyExtractor={(item) => item.id} />;
        </ScrollView>
    };

    return (
        <View style={{ height: 120, borderBottomWidth: 1, borderBottomColor: '#212121' }}>
            <BoxList />
        </View>
    )



    // return (
    //     <View style={{ height: 120, borderBottomWidth: 1, borderBottomColor: '#212121' }}>
    //         <ScrollView horizontal>
    //             <View style={{ flexDirection: 'row', margin: 5 }}>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.girl} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Alice</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.anklet} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>George</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.beach} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Diana</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.astronaut} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Hailey</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.bandana} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Bob</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.dock} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Barbara</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.rings} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Emily</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.subway} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Charlie</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.ferris} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Betty</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', marginLeft: 5 }}>
    //                     <TouchableOpacity onPress={handlePress} style={styles.story}><Image source={Pim.cafe} style={styles.storyImage} /></TouchableOpacity>
    //                     <Text style={styles.storyName}>Carrie</Text>
    //                 </View>
    //             </View>
    //         </ScrollView>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    story: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#555',
        padding: 2.5,
        marginRight: 3,
        justifyContent: 'center',
    },
    storyImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    storyName: {
        color: 'white',
        fontFamily: 'Regular',
        fontSize: 20,
        marginTop: 3,
        textAlign: 'center'
    }

})