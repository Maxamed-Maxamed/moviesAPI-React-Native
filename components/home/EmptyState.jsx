import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import CustomButton from '../custom/CustomButton'
import { router } from 'expo-router'

const EmptyState = ( {title, subtitle}) => {
  return (
    <View className="flex justify-center items-center px-4">
    <Image
      source={images.empty}
      resizeMode="contain"
      className="w-[200px] h-[160px]"

    />

    <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
    <Text className="text-xl text-center font-psemibold text-white mt-2">
      {subtitle}
    </Text>
      
        <CustomButton
        title= "create a video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
        
        />
    
    </View>
  )
}

export default EmptyState