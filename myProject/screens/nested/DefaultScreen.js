import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'


const DefaultScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image/>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('Map')}>
                <Text>to Map</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Comments')}>
                <Text>to Comments</Text>
            </TouchableOpacity>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        marginTop: 32,
        justifyContent: 'center',        
        borderRadius: 8,
        overflow: 'hidden',
    }
})

export default DefaultScreen;