import React from 'react';
import { Text, View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';

// Tab Icon Component
const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="items-center justify-center mt-5 -ml-8 mb-2">

        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 24, height: 24 }}
        />
        <Text
          className={`${focused ? "font-semibold" : "font-normal"} text-xs`}
          style={{ color }} 
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
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            height: 84,
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


      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
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