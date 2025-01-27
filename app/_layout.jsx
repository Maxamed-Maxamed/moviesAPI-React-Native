import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
// Import your global CSS file
import "../global.css";

const _RooyLayout = () => {
  return (
   
  
 <Stack>
 <Stack.Screen name="index" options={{headerShown: false}}/>


 </Stack>
   
  )
}

export default _RooyLayout