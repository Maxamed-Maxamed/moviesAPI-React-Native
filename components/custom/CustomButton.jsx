import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (
    {  title,
        handlePress,
        containerStyles,
        textStyles,
        isLoading,}
) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary-200 rounded-xl min-h-[62px] w-full flex justify-center items-center mt-5 mb-5  ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    >  
    
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}> {title} </Text>
    </TouchableOpacity>
  )
}

export default CustomButton