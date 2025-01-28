import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { Slot, Stack } from 'expo-router'
import {Link} from 'expo-router'
import "../styles/global.styles.css"
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function App() {
   {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">AORA!</Text>
        
        <Link href="/profile" className="text-blue-500">Profile</Link>
        <StatusBar style="auto" />
      </View>
    )
  }
  
}