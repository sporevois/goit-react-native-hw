import React, { useState, useCallback } from "react";
import { AntDesign } from '@expo/vector-icons';
import useTogglePassVisibility from "../hooks/useTogglePassVisibility";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
        name: '',
        email: '',
        password: ''
}

SplashScreen.preventAutoHideAsync();
    
const RegistrationScreen = () => {
    
    const [state, setState] = useState(initialState);
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require("../assets/fonts/Roboto-Regular.ttf"),
        'Roboto-Medium': require("../assets/fonts/Roboto-Medium.ttf"),
    });
    const { passwordVisibility, variable, handlePasswordVisibility } = useTogglePassVisibility();    

    const submit = () => {
        console.log(state);
        setState(initialState);
    }

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    };

    return (
        <TouchableWithoutFeedback onLayout={onLayoutRootView} onPress={Keyboard.dismiss}>
            <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.jpg')}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={styles.form} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatar}>
                                {/* Avatar upload */}
                            </View>
                            <TouchableOpacity style={styles.addAvatarBtn}>
                                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Регистрация</Text>
                        </View>                        
                        <TextInput
                            name="name"
                            value={state.name}
                            placeholder="Логин"
                            style={styles.input}
                            onChangeText={(value)=>setState(prev =>({...prev, name:value}))}
                        />
                        <TextInput
                            name="email"
                            value={state.email}
                            placeholder="Адрес электронной почты"
                            style={styles.input}
                            onChangeText={(value)=>setState(prev =>({...prev, email:value}))}
                        />
                        <View>
                            <TextInput
                                name="password"
                                value={state.password}
                                placeholder="Пароль"
                                secureTextEntry={passwordVisibility}
                                style={{...styles.input, marginBottom:43}}
                                onChangeText={(value)=>setState(prev =>({...prev, password:value}))}
                            />
                            <TouchableOpacity style={styles.toogleBtn} disabled={!state.password} onPress={handlePasswordVisibility}>
                                <Text style={styles.toogleBtnTitle}>{variable}</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btn} disabled={!state.password || !state.email || !state.name} activeOpacity={0.5} onPress={submit}>
                        <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
                    </View>
                </View>            
            </ImageBackground>
        </TouchableWithoutFeedback>
    )    
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',     
    },
    form: {
        paddingHorizontal:16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,        
        backgroundColor:'#FFFFFF',
    },
    container: {
        paddingHorizontal: 16,
        paddingBottom:78,
        backgroundColor:'#FFFFFF',
    },
    avatarContainer: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        marginBottom: 32,
        alignSelf: 'center',
        borderRadius: 16,
        backgroundColor: "#F6F6F6"
    },
    addAvatarBtn: {
        position: "absolute",
        right: -12,
        bottom:14,
        borderRadius:50,
        backgroundColor:'#FFFFFF',
        
    },
    textContainer: {
        alignItems:"center"
    },
    title: {
        marginTop: 92,
        marginBottom: 33,
        color:'#212121',
        fontSize: 30,
        fontFamily:'Roboto-Medium'
    },
    input: {
        height: 50,
        padding:16,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(232, 232, 232, 1)",
        backgroundColor: "#F6F6F6",
        color: "#212121",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
    toogleBtn: {
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
        padding: 16,
    },
    toogleBtnTitle: {
        color: "#1B4371",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',           
    },
    btn: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:16,
        borderRadius: 100,
        backgroundColor:"#FF6C00",
    },
    btnTitle: {
        color:"#FFFFFF",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',        
    },
    link: {
        color: "#1B4371",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    }
    
})

export default RegistrationScreen;



