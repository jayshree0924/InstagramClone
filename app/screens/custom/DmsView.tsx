import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pim } from '../../constants/ImageCons';

export default function Dms() {

    const navigation = useNavigation()

    const handleMsg = () => {
        navigation.navigate('Message', {})
    }

    const data = [
        { id: '1', name: 'Alice Jhonson', image: Pim.wall, text: 'What are you upto?' },
        { id: '2', name: 'George Siem', image: Pim.dior, text: `I'll catch up with you later` },
        { id: '3', name: 'Diana Prince', image: Pim.paint, text: 'Sent 5m ago' },
        { id: '4', name: 'Hailey ', image: Pim.rings, text: 'Sent 10m ago' },
        { id: '5', name: 'Bob ', image: Pim.anklet, text: 'Sure <3' },
        { id: '6', name: 'Barbara ', image: Pim.dock, text: 'Sent 20m ago' },
        { id: '7', name: 'Emily ', image: Pim.cafe, text: 'Hey! Wassup' },
        { id: '8', name: 'Charlie', image: Pim.makeup, text: 'Sent 1hr ago' },
        { id: '9', name: 'Betty ', image: Pim.ferris, text: 'Big news!!! x_x' },
        { id: '10', name: 'Carrie ', image: Pim.coffee, text: 'Sent 2hr ago' },
    ];

    return (
        <View style={{ height: 'auto' }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', top: 20, left: 5, marginBottom: 20 }}>
                        <TouchableOpacity>
                            <Image source={item.image} style={{ height: 60, width: 60, borderRadius: 50, }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleMsg}
                            style={{ flex: 0.9 }}>
                            <View style={{ justifyContent: 'center', left: 15, flex: 1 }}>
                                <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Regular' }}>{item.name}</Text>
                                <Text style={{ color: '#999', fontSize: 22, fontFamily: 'Regular' }}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons
                                name='camera-outline'
                                color={'#999'}
                                size={25}
                                style={{ top: 10 }} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id} />;
        </View>
    )
};