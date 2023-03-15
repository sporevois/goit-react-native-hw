import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import MapView,  { Marker }  from 'react-native-maps';


const MapScreen = ({ route }) => {
    if (!route.params) {
        return <Text>No location</Text>;
    }
    console.log(route.params.item.location)
    const { latitude, longitude } = route.params.item.location;
    
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.001,
                }}
            >
                <Marker
                    title="I am here"
                    coordinate={{ latitude, longitude}}
                    description='Hello'
                />
            </MapView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    map:{
        flex:1,
    }
})

export default MapScreen;