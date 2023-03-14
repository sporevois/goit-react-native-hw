import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MapView from 'react-native-maps';


const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}></MapView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map:{
        flex:1,
    }
})

export default MapScreen;