import React from 'react';
import { NavigationContainer, useState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, IconButton, DefaultTheme } from 'react-native-paper';
import HomeScreen from './screens/LoginScreen/LoginScreen';
import MyFunction from './screens/DashBoard';

import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'
import AppDev  from './screens/Services/AppDev'
import WebDev from './screens/Services/WebDev'
import DeskDev from './screens/Services/DeskDev'
import TechSDev from './screens/Services/TechSDev'
import {onAppServiceLinkPress, onWebServiceLinkPress, onDeskServiceLinkPress, onTechServiceLinkPress} from './screens/Services/EmailRender'


const Stack = createNativeStackNavigator()

export default function App() {
  
return (
<PaperProvider>
<NavigationContainer>
<Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} >
<Stack.Screen name="Login" component={HomeScreen} 
options={{  headerShown:false
}} 
 />

 <Stack.Screen name="AppDev" component={AppDev} options={{ headerRight: () => (
<IconButton icon="email" onPress={onAppServiceLinkPress} color={DefaultTheme.colors.notification} />
), headerTitleAlign: 'center'
}} />
 <Stack.Screen name="WebDev" component={WebDev} options={{ headerRight: () => (
<IconButton icon="email" onPress={onWebServiceLinkPress} color={DefaultTheme.colors.notification} />
), headerTitleAlign: 'center'
}} />
 <Stack.Screen name="DeskDev" component={DeskDev} options={{ headerRight: () => (
<IconButton icon="email" onPress={onDeskServiceLinkPress} color={DefaultTheme.colors.notification} />
), headerTitleAlign: 'center'
}} />
 <Stack.Screen name="TechSDev" component={TechSDev} options={{ headerRight: () => (
<IconButton icon="email" onPress={onTechServiceLinkPress} color={DefaultTheme.colors.notification} />
), headerTitleAlign: 'center'
}} />
<Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false }} />
<Stack.Screen name="DashBoard" component={MyFunction} options={{headerShown:false }}/>


</Stack.Navigator>
</NavigationContainer>
</PaperProvider>
);
}
