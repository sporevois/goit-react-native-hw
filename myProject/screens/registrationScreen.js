import React from "react";
import { StyleSheet, Text, View, TextInput , ImageBackground } from 'react-native'

const RegistrationScreen = () => {
    return (
        <ImageBackground style={styles.image} source={require('../images/PhotoBG.jpg')}>
            <View style={styles.form}>
                <Text style={styles.title}>Регистрация</Text>
                <TextInput
                    placeholder="Логин"
                    style={styles.input} />
                <TextInput
                    placeholder="Адрес электронной почты"
                    style={styles.input} />
                <TextInput
                    placeholder="Пароль"
                    style={styles.input} />
            </View>
        </ImageBackground>
    )    
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems:"center",        
    },
    form: {
        flex: 1,
        alignItems:"center",
        marginTop: 263,
        width: "100%",
        backgroundColor:'#FFFFFF'
    },
    title: {
        marginBottom: 31,
        fontSize: 30,

    },
    input: {
        width: 343,
        height: 50,
        marginHorizontal: 16,
        marginBottom: 16,
        padding:16,
        border: 1,
        borderRadius: 8,
        borderColor: "rgba(232, 232, 232, 1)",
        backgroundColor: "#F6F6F6",
        color:"#E8E8E8",
    },
    
})

export default RegistrationScreen



