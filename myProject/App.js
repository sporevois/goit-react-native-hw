import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import HomeScreen from './screens/main/Home';

SplashScreen.preventAutoHideAsync();
const AuthStack = createNativeStackNavigator();

export default function App() {   
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf"),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
    
  if (!fontsLoaded) {
    return null;
  };

  return (    
    <NavigationContainer onReady={onLayoutRootView}>   
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name='Register' component={RegistrationScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
