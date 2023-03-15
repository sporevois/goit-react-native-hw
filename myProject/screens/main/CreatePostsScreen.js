import React, { useState, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    TextInput,
} from 'react-native';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

const initialState = {
    photo: '',
    title: '',
    place: '',
    location: '',
}

const CreatePostsScreen = ({navigation}) => { 
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [state, setState] = useState(initialState)

  
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            const {coords}= await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced, });
            setState(prev => ({...prev, photo: uri, location: coords}));
        }
    }

    const submit = async () => {       
        console.log(state)        
        navigation.navigate('Default', { state });
        setState(initialState);
    }

    
    return (
        <View style={styles.container}>
            {state.photo? (
                <View style={styles.photoContainer}>
                    <Image source={{ uri: state.photo }} style={{ height: 240 }} />
                    <TouchableOpacity style={styles.cameraBtn} onPress={()=>setState(prev => ({...prev, photo: ''}))}>
                        <FontAwesome name="camera" size={24} color="#FFFFFF" />
                    </TouchableOpacity>  
                </View>
            ) : (
                <Camera style={styles.camera} ref={setCameraRef}>
                
                <TouchableOpacity style={styles.snapBtn} onPress={takePhoto}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>                
            </Camera>
            )}
            <Text style={styles.text}>Загрузите фото</Text>
            <TextInput
                name="title"
                value={state.title}
                placeholder="Название..."
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                onChangeText={(value) => setState(prev =>({...prev, title: value}))}
            />
            <View>
                <TextInput
                    name="place"
                    value={state.place}
                    placeholder={"Местность..."}
                    placeholderTextColor="#BDBDBD"
                    style={{...styles.input, paddingLeft:28}}
                    onChangeText={(value) => setState(prev =>({...prev, place: value}))}
                />
                <SimpleLineIcons style={{position:"absolute", top: 13}} name="location-pin" size={24} color="#BDBDBD" />
            </View>
            
            <TouchableOpacity style={styles.btn}  onPress={submit}>
                <Text style={styles.btnTitle}>Опубликовать</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
    },
    camera: {
        height: 240,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',        
        borderRadius: 8,
        overflow: 'hidden',

    },
    snapBtn: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: "#FFFFFF",        
    },
    cameraBtn: {
        position: "absolute",
        width: 60,
        height: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    photoContainer: {        
        marginTop: 32,
        justifyContent: 'center',        
        borderRadius: 8,
        overflow: 'hidden',
    },
    text: {
        marginTop: 8,
        marginBottom: 23,
        color:"#BDBDBD", 
        fontSize: 16,
        fontFamily: 'Roboto-Regular',               
    },
    input: {
        paddingVertical: 15,
        marginBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8', 
        fontSize: 16,
        fontFamily: 'Roboto-Regular', 
    },
    btn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor:"#FF6C00",
    },
    btnTitle: {
        color:"#FFFFFF",
        fontSize: 16,
        fontFamily: 'Roboto-Regular', 
    }
})


export default CreatePostsScreen;