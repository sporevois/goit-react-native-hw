import React, { useState } from "react";
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

const initialState = {
        name: '',
        email: '',
        password: ''
}
    
const RegistrationScreen = () => {
    
    const [state, setState] = useState(initialState);
    const { passwordVisibility, variable, handlePasswordVisibility } = useTogglePassVisibility();    

    const submit = () => {
        console.log(state);
        setState(initialState);
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={styles.image} source={require('../images/PhotoBG.jpg')}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={styles.form} behavior={Platform.OS == "ios" ? "padding" : "height"}>  
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
                            <TouchableOpacity style={styles.toogleBtn} onPress={handlePasswordVisibility}>
                                <Text style={styles.toogleBtnTitle}>{variable}</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btn} onPress={submit}>
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
    textContainer: {
        alignItems:"center"
    },
    title: {
        marginVertical: 33,
        fontSize: 30,
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
    },
    toogleBtn: {
        position: 'absolute',
        alignSelf: 'center',
        right: 0,
        padding: 16,
    },
    toogleBtnTitle: {
        fontSize: 16,
        color: "#1B4371",   
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
        fontSize: 16,
        color:"#FFFFFF"
        
    },
    link: {
        color: "#1B4371",
        fontSize:16,
    }
    
})

export default RegistrationScreen



