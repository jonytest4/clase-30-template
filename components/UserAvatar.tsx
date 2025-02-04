import { View, Text, Image } from 'react-native'
import React from 'react'

/* Declaración de interfaces para indicar que es lo que va a recibir como parámetros*/
interface UserAvatarProps{
    name: string,
    urlAvatar: string
}

export default function userAvatar(
    /*acceso a las variables de la interface*/
    /*Destruturación de objeto*/
    {name,urlAvatar} : UserAvatarProps
) {
  return (
    <View className='flex justify-center items-center mt-10'>
        <Image
            source={{uri:urlAvatar}}
            className='w-40 h-40 rounded-full'
        />  
        <Text className='text-2xl'>{name}</Text>
    </View>
  )
}