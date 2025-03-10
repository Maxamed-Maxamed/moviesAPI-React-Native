import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import "../styles/global.styles.css";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { GlobalProvider } from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;  // If there is an error, throw it to stop further execution
    if (fontsLoaded) SplashScreen.hideAsync();  // If fonts are loaded, hide the splash screen
}, [fontsLoaded, error]); // Dependencies array: effect runs when `fontsLoaded` or `error` changes 

if (!fontsLoaded && !error) return null; // If fonts are not loaded and there is no error, return null (don't render anything)

  
  return (
    <>
    <GlobalProvider>
      <StatusBar style="auto" />    
     <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
    </GlobalProvider>
    </>
  );
};

export default RootLayout;
