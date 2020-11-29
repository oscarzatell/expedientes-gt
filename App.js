import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListaExpedientes from "./pantallas/ListaExpedientes";
import CrearExpediente from "./pantallas/CrearExpediente";
import VerExpediente from "./pantallas/VerExpediente";

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="ListaExpedientes" component={ListaExpedientes} />
      <Stack.Screen name="CrearExpediente" component={CrearExpediente} />
      <Stack.Screen name="VerExpediente" component={VerExpediente} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
