import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import "../styles/global.styles.css"

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>profile</Text> 
    </View>
  )
}

export default profile
