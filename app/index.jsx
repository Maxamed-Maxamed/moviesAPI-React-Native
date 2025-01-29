import { Text, StyleSheet, View, StatusBar, Image } from 'react-native'
import { Link } from 'expo-router'
import "../styles/global.styles.css"
import { SplashScreen } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import { ScrollView } from 'react-native';
import { Images, images } from '../constants';


SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with {''}
              <Text className='text-secondary-200'> Aora </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2.5  left-1/2 -translate-x-1/4"
              resizeMode="contain"
            />
          </View>
          {/* <Text className='text-white text-center mt-5'> */}
          <Text className='text-sm font-pregular text-white text-center mt-5 mb-5'>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
