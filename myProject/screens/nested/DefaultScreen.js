import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native'



const DefaultScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params) {
            setPosts((prev) => [...prev, route.params.state])
        }
    }, [route.params])

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.photoContainer}>
                            <Image source={{ uri: item.photo }} style={{ height: 240 }}/>
                        </View>
                        <Text>{ item.title}</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Map', {item})}>
                            <Text>to Map</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Comments', {item})}>
                            <Text>to Comments</Text>
                        </TouchableOpacity>
                    </>
                )}

            />
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
    },
    photoContainer: {
        marginTop: 32,
        justifyContent: 'center',        
        borderRadius: 8,
        overflow: 'hidden',
    }
})

export default DefaultScreen;