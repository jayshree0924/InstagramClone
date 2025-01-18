import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Register() {

    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const navigation = useNavigation()
    const [name, setName] = useState('');

    const handleLoginPress = () => {
        console.log("Successfully logged in as " + name + " !");
        navigation.navigate('HomeScreen', {
            // username: name,
        })
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../../assets/instagram.png')} style={styles.loader} />
                <View style={styles.miniContainer}>
                    <TextInput
                        placeholder='Username, email address, mobile...'
                        placeholderTextColor='#5f7889'
                        cursorColor={'#fff'}
                        value={name}
                        onChangeText={setName}
                        style={styles.input}></TextInput>
                    <View style={[styles.input, { flexDirection: 'row', padding: 8 }]}>
                        <TextInput
                            placeholder='Password'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={!isPasswordVisible}
                            placeholderTextColor='#5f7889'
                            cursorColor={'#fff'}
                            style={{ color: 'white', fontSize: 15, flex: 0.98 }}
                        ></TextInput>
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons
                                name={isPasswordVisible ? 'eye-off' : 'eye'}
                                size={25}
                                color={'#5f7889'}
                                style={{ marginTop: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLoginPress}
                >
                    <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', }}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity><Text style={styles.reset}>Forgotten Password?</Text></TouchableOpacity>
                <TouchableOpacity style={styles.register}><Text style={styles.registerText}>Create new account</Text></TouchableOpacity>
                <Image source={require('../../assets/meta.png')} style={styles.meta} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#163142'
    },
    loader: {
        height: 60,
        width: 60,
        alignItems: 'center',
        marginTop: 150

    },
    miniContainer: {
        marginTop: 80
    },
    input: {
        backgroundColor: '#172a35',
        color: '#fff',
        width: 350,
        margin: 7,
        fontSize: 15,
        padding: 18,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#50697a'
    },
    loginButton: {
        backgroundColor: '#176bf4',
        height: 50,
        width: 350,
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 7
    },
    reset: {
        color: '#fff',
        fontSize: 16,
        marginTop: 15
    },
    register: {
        borderWidth: 1,
        borderColor: '#3cadff',
        borderRadius: 50,
        height: 50,
        width: 350,
        justifyContent: 'center',
        marginTop: 140
    },
    registerText: {
        color: '#3cadff',
        textAlign: 'center',
        fontSize: 16
    },
    meta: {
        height: 13,
        width: 66,
        marginTop: 20,
        tintColor: '#ccc'
    }
})