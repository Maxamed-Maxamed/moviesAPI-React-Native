import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useState } from 'react';
// import { icons } from "../constants";
import { icons } from "../../constants";

const SearchInput = (
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
    
        <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center space-x-4">

            <TextInput
            className=" text-base, text-white flex-1 font-pregular"
            value={value}
            placeholder="Search for a video to watch" 
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            {...props}
           secureTextEntry={title === "Password" && !showPassword}
            />

        <TouchableOpacity>
        <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        />
        </TouchableOpacity>

    </View>
   
  )
}

export default SearchInput
