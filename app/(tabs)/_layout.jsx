import React from 'react';
import { Text, View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';

// Tab Icon Component
const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center mt-4 -ml-2">
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 24, height: 24 }}
        />
        <Text
          className={`${focused ? "font-semibold" : "font-normal"} text-xs`}
        >
          {name}
        </Text>
      </View>
    );
  };

// Tabs Layout Component
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#fff',
            borderTopWidth: 0,
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
};

export default TabsLayout;