import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-lvh px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
            />
            <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>login to Aora</Text>
            

        </View>
      </ScrollView>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

export default SignIn