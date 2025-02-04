import { View, Text } from "react-native";
import React from "react";
//generamos la interfaz referente al typo que va a recibir
interface MessageProps {
  message: string;
  type: "user" | "assistant";
}

export default function BubbleMessages({ message, type }: MessageProps) {
  return (
    //estilado sin condicionales
    // <View className="flex flex-row">
    
    //estilado con condicionales
    <View className={`flex ${type == "user" ? "flex-row-reverse" : "flex-row"} p-2 rounded-lg justify-start my-2`}>
      <Text className="text-2xl">{type == "user" ? "🙍‍♂️" : "🤖"}</Text>
      <Text className={`text-lg ${type == "user" ? "text-white bg-blue-500" : "text-black bg-gray-300"} p-2 rounded-lg`}>{message}</Text>
    </View>
  );
}
