import { View, Text, Image, Linking } from "react-native";
import React from "react";
import UserAvatar from "@/components/UserAvatar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabAbout() {
  return (
    <View className="flex-1">
      {/*Estructuraciónde componente interno, revisar components para ver este mismo componente reutilizable UserAvatar*/}
      {/* <View className='flex justify-center items-center mt-10'>
            <Image
                source={{uri:"https://img.freepik.com/foto-gratis/silueta-ejecutivos-comerciales-seguros_1098-1768.jpg?t=st=1738687448~exp=1738691048~hmac=47bb9f82487b1f55a51a1d29acbe554d8899371d8f31a8c8dc96066b1b5f87ef&w=996"}}
                className='w-40 h-40 rounded-full'
            />  
            <Text>Dispositivos Móviles</Text>
        </View> */}
      <UserAvatar
        name="Julio Tito"
        urlAvatar="https://img.freepik.com/foto-gratis/silueta-ejecutivos-comerciales-seguros_1098-1768.jpg?t=st=1738687448~exp=1738691048~hmac=47bb9f82487b1f55a51a1d29acbe554d8899371d8f31a8c8dc96066b1b5f87ef&w=996"
      />
      <Text className="text-4xl font-bold ml-4 mt-4">Sobre Mi</Text>
      <Text className="text-xs mx-4 text-justify">
        Recuerda que los grandes logros comienzan con pequeños pasos. ¡Sigue
        adelante! Hoy es un gran día para empezar algo nuevo. ¡Confía en ti y da
        el primer paso! A veces, la vida pone pruebas para hacerte más fuerte.
        ¡Tú puedes con esto y con mucho más! El único límite eres tú. Cree en ti
        y verás cómo todo es posible. Cada día es una nueva oportunidad para
        mejorar y acercarte a tus sueños. ¡No te rindas! Eres capaz de lograr
        cosas increíbles. Confía en el proceso y sigue adelante. No importa lo
        lento que vayas, mientras no te detengas. ¡Sigue avanzando! Recuerda, el
        éxito es la suma de pequeños esfuerzos repetidos cada día. ¡Lo estás
        logrando! La fuerza para lograr tus sueños está dentro de ti. ¡No dejes
        que nada te detenga! Hoy es un nuevo comienzo. Aprovecha esta
        oportunidad y haz que valga la pena.
      </Text>
      <Text className="text-3xl font-bold ml-4 mt-4">Contacto</Text>
      <View>
        <View className="flex flex-row items-center ml-4 mt-4">
          <Ionicons name="logo-github" size={40} color="black" />
          <Text
            className="text-md text-blue-400 font-bold underline"
            onPress={(e) => {
              e.preventDefault();
              Linking.openURL("https://github.com/jonytest4/clase-30-template");
            }}
          >
            jonytest04
          </Text>
        </View>
        <View className="flex flex-row items-center ml-4 mt-4">
          <Ionicons name="logo-linkedin" size={40} color="blue" />
          <Text className="text-md text-blue-400 font-bold">jonytest04</Text>
        </View>
      </View>
    </View>
  );
}
/*dentro de require se puede colocar uri:"dirección de la imagen en la web" para cargar imágenes desde la web*/
/*source={require("../../assets/images/react-logo.png")}*/
