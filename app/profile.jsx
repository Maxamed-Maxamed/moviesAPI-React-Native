import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css";

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>profile</Text> 
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'blue',
    },
    
})