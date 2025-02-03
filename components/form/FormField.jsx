import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useState } from 'react';
// import { icons } from "../constants";
import { icons } from "../../constants";

const FormField = (
    {
        title,
        value,
        placeholder,
        handleChangeText,
        otherStyles,
        ...props
      }
) => {
   const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base, text-gray-50 font-pmedium ">{title}</Text>
        {/* <View className="border-2 border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary-200 items-center px-4 flex-row"> */}
        <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">

            <TextInput
            className=" flex-1 text-white text-base font-psemibold"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            {...props}
           secureTextEntry={title === "Password" && !showPassword}
            />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

    </View>
    </View>
  )
}

export default FormField
