import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CriarConta from '../pages/CriarConta';
import TelaLogin from '../pages/TelaLogin';
import Email from '../pages/Email';
import Senha from '../pages/Senha';
import Verificacao from '../pages/Verificacao';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaLogin" component={TelaLogin}  options={{ headerShown: false }}/>  
      <Stack.Screen name="CriarConta" component={CriarConta}  options={{ headerShown: false }}/>
      <Stack.Screen name="Email" component={Email}  options={{ headerShown: false }}/>
      <Stack.Screen name="Senha" component={Senha} options={{ headerShown: false }}/>
      <Stack.Screen name="Verificacao" component={Verificacao} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}