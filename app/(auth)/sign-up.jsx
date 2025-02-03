import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'
import FormField from '../../components/form/FormField' // use this import from on to the every application component 
import { useState } from 'react'
import CustomerButton from "../../components/custom/CustomButton" // use this import from on to the every application component no what the name of the component is
import { Alert } from 'react-native'
import { Link } from 'expo-router'

const SignUp = () => {
  const[form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  })

const [isSubmitting, setisSubmitting] = useState(false)

const submit = () => {
}


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
            />
            <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'> Sign Up to Aora</Text>
            <FormField 
              title="Username"
              value={form.userName}
              handleChangeText={(e) => setForm({...form, userName: e})}
              otherStyles="mt-10"
             
            />
            <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles="mt-10"
              keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-5"

            />

          <CustomerButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className='text-white text-lg font-pregular '>Have an account ready ? </Text>
            <Link href='/sign-in' className="text-lg font-pregular text-secondary-200 font-black" >Sign in</Link>

            





          </View>

          
            
        
        </View>
      </ScrollView>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}


export default SignUp

