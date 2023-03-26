import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from '../nested/DefaultScreen';
import CommentsScreen from '../nested/CommentsScreen';
import MapScreen from '../nested/MapScreen';

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen
                options={{ headerShown: false }}
                name='Default'
                component={DefaultScreen}
            />
            <NestedScreen.Screen
                options={{ headerShown: false }}
                name='Comments'
                component={CommentsScreen}
            />
            <NestedScreen.Screen
                options={{ headerShown: false }}
                name='Map'
                component={MapScreen}
            />
        </NestedScreen.Navigator>
        
    )
}


export default PostsScreen;