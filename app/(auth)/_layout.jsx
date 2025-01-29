import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Authlayout = () => {
  return (
   <>
   <Stack>
    <Stack.Screen name="sign-in" options={{headerShown:false}}/>
    <Stack.Screen name="sign-up" options={{headerShown:false}}/>
   </Stack>
   <StatusBar style="auto"/>
   
   </>
  )
}

export default Authlayout

