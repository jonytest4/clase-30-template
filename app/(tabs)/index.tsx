import { View, Text, FlatList, TextInput, Button } from "react-native";
import React from "react";
import BubbleMessages from "@/components/BubbleMessages";
import { useState } from "react";

export default function TabIndex() {
  //Requerimientos
  //Como vamoa a manejar los mensajes
  //Qué van a tener
  //UI para esos mensajes
  //Darle la funcionalidad

  //mensajes de ejemplo
  const exampleMessage: Message[] = [
    {
      id: 1,
      message: "Hola",
      type: "user",
    },
    {
      id: 2,
      message: "Hola, ¿Cómo estás?",
      type: "assistant",
    },
  ];
  //uso de estado para anejar el envío de mensajes
  const [messages, setMessages] = useState(exampleMessage)

  return (
    <View className="flex flex-1">
      <FlatList
        //data={exampleMessage}
        data={messages}
        renderItem={({ item }) => (
          <BubbleMessages message={item.message} type={item.type} />
        )}
      />

      <View className="flex flex-row items-center">
        <TextInput
          className="border-2 border-gray-200 rounded-lg p-2 w-3/4 ml-2 mb-2"
          placeholder="Escribe tu mensaje"
          onSubmitEditing={(e) =>{
            setMessages([...messages,{
              id: messages.length + 1,
              message: e.nativeEvent.text,
              type: "user"
            }])
          }}
        />
        <View className="w-1/4 flex justify-center items-center">
          <Button title="Enviar" onPress={() => {}}/>
        </View>
      </View>
    </View>
  );
}
