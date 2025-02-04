import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
// Import your global CSS file
import "../global.css";

const RootLayout = () => {
  return (
    //estilado con stylesheet de native
    /*<View style={{ flex: 1, backgroundColor: "gray" }}></View>*/

    //estilado con nativewind*/
    <View className='flex-1'>
      <StatusBar barStyle={"default"}/>
      <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown:false}} />
      </Stack>
    </View>
  )
}

export default RootLayout