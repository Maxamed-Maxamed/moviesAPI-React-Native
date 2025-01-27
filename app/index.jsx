import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { Slot, Stack } from 'expo-router'
import {Link} from 'expo-router'

export default function App() {
   {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>AORA!</Text>
        <StatusBar style="auto" />
        <Link href="/profile" className="text-blue-500">Profile</Link>
      </View>
    )
  }
  
}