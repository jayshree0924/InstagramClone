import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pim } from '../../constants/ImageCons';
import { useFonts } from 'expo-font';


export default function Notes() {

    const navigation = useNavigation()

    const data = [
        { id: '1', name: 'Alice', image: Pim.wall, text: `Life is\ngood` },
        { id: '2', name: 'George', image: Pim.dior, text: `Hey\nthere` },
        { id: '3', name: 'Diana', image: Pim.paint, text: `Live the\nmoment` },
        { id: '4', name: 'Hailey', image: Pim.rings, text: `Good\nthings t...` },
        { id: '5', name: 'Bob', image: Pim.anklet, text: '<3' },
        { id: '6', name: 'Betty', image: Pim.ferris, text: 'Big news!\n x_x' },
    ];

    const renderItem = ({ item }: { item: typeof data[0] }) => (
        <View style={styles.imageRow}>
            <TouchableOpacity>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.note}>{item.name}</Text>
                <Ionicons name="chatbox" color={'#222'} size={80} style={styles.icon} />
                <Text style={styles.noteText}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        marginVertical: 10,
    },
    imageRow: {
        flexDirection: 'row',
        top: 70,
        left: 5,
        marginRight: 10,
        height: 190
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 50,
        marginRight: 10
    },
    note: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 22,
        top: 5,
        right: 5
    },
    noteText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        right: 3,
        bottom: 215,
        fontFamily: 'Regular'
    },
    icon: {
        bottom: 150
    }
});