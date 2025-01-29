import { Text, StyleSheet, View,  Image } from 'react-native'
// import "../styles/global.styles.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '../constants';
import CustomButton from '../components/custom/CustomButton';
import { Redirect, router } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
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
          

          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push('/sign-in')
             }}
             containerStyles={"bg-secondary-200 rounded-xl  min-h-[62px] w-full flex justify-center items-center mt-5 mb-5"}
             textStyles={"text-primary font-psemibold text-lg"}
             
          />
            
          
        </View>
      </ScrollView>





















      <StatusBar backgroundColor='#161622' style='light' /> 
    </SafeAreaView>
  );
}
