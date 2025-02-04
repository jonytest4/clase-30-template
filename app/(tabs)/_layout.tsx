import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen 
            name='index'
            options={{
                title: "Inicio",
                tabBarIcon: ({color}) => (<Entypo name="chat" size={24} color={color} />),
            }}
        />
        <Tabs.Screen 
            name='about'
            options={{
                title: "About",
                tabBarIcon: ({color}) => (<Entypo name="user" size={24} color={color} />),
            }}
        />
    </Tabs>
    
  )
}