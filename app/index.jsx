import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { Slot, Stack } from 'expo-router'
import {Link} from 'expo-router'

export default function App() {
   {
    return (
      <View style={styles.container}>
        <Text>AORA!</Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{color: 'blue'}}>Profile</Link>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
}) 