import React, { useState } from "react";
import useTogglePassVisibility from "../../hooks/useTogglePassVisibility";
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
    Pressable,
} from 'react-native'

const initialState = {
        email: '',
        password: ''
}

const LoginScreen = () => {

    const [state, setState] = useState(initialState);
    const { passwordVisibility, variable, handlePasswordVisibility } = useTogglePassVisibility(); 

    const submit = () => {
        console.log({email: state.email, password: state.password});
        setState(initialState);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={styles.image} source={require('../../assets/images/PhotoBG.jpg')}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={styles.form} behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Войти</Text>
                        </View>                        
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
                    <TouchableOpacity style={styles.btn} disabled={!state.password || !state.email} activeOpacity={0.5} onPress={submit}>
                        <Text style={styles.btnTitle}>Войти</Text>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
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
        paddingBottom:144,
        backgroundColor:'#FFFFFF',
    },
    textContainer: {
        alignItems:"center"
    },
    title: {
        marginTop: 32,
        marginBottom: 33,
        color:'#212121',
        fontSize: 30,
        fontFamily: 'Roboto-Medium',
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
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        
    },
    link: {
        color: "#1B4371",
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    }
    
})

export default LoginScreen;