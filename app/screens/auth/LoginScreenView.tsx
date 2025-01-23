import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string | undefined>();

    const navigation = useNavigation()
    const [name, setName] = useState<string | undefined>();
    const [error, setError] = useState<loginError>({})
    const [email, setEmail] = useState<string | undefined>('')

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    interface loginError {
        email?: string
        password?: string
    }

    useEffect(() => {
        validation();
    }, [email, password]);

    const validation = () => {
        var newErrors: loginError = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!email || email.length <= 0) {
            // newErrors.email = "Email cannot be empty!";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format!";
        }

        if (!password || password.length <= 0) {
            // newErrors.password = "Password cannot be empty!";
        } else if (!passwordRegex.test(password)) {
            newErrors.password = "Password must be at least 8 characters, include an uppercase letter,\n a lowercase letter, a number, and a special character.";
        }

        setError(newErrors);
    };


    const handleLoginPress = () => {
        navigation.navigate('HomeScreen', {
            // username: name,
        })
    }

    const handlePasswordPress = () => {
        navigation.navigate('Password', {})
    }

    const handleRegisterPress = () => {
        navigation.navigate('Register', {})
    }

    const [isDisabled, setIsDisabled] = useState(false)
    useEffect(() => {
        setIsDisabled(!email || !password);
    }, [email, password]);

    const resetError = () => {

    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../../assets/instagram.png')} style={styles.loader} />
                    <View style={styles.miniContainer}>
                        <TextInput
                            placeholder='Username, email address, mobile...'
                            placeholderTextColor='#5f7889'
                            cursorColor={'#fff'}
                            value={email}
                            onChangeText={setEmail}
                            onFocus={resetError}
                            style={styles.input}></TextInput>

                        {error.email && <Text style={{ color: 'crimson', fontSize: 10, marginLeft: 10 }}>{error.email}</Text>}

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

                        {error.password && <Text style={{ color: 'crimson', fontSize: 10, marginLeft: 10 }}>{error.password}</Text>}

                    </View>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLoginPress}
                        disabled={isDisabled}
                    ><Text style={{ fontSize: 16, color: '#fff', textAlign: 'center', }}>Log in</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handlePasswordPress}><Text style={styles.reset}>Forgotten Password?</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleRegisterPress} style={styles.register}><Text style={styles.registerText}>Create new account</Text></TouchableOpacity>
                    <Image source={require('../../assets/meta.png')} style={styles.meta} />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#163142',
        height: 810
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