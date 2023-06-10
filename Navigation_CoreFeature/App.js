import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, IconButton, DefaultTheme } from 'react-native-paper';
import HomeScreen from './screens/LoginScreen/LoginScreen';
import MyFunction from './screens/DashBoard';
import NameScreen from './screens/NameScreen';
import TitleScreen from './screens/TitleScreen';
import BackScreen from './screens/BackScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'


const Stack = createNativeStackNavigator()

export default function App() {
  
return (
<PaperProvider>
<NavigationContainer>
<Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} >
<Stack.Screen name="Login" component={HomeScreen} 
options={{ headerRight: () => (
<IconButton icon="alert-outline" onPress={() => alert('You\'re awesome!')} color={DefaultTheme.colors.notification} />
), headerShown:false
}} 
 />
<Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false }} />
<Stack.Screen name="DashBoard" component={MyFunction} options={{headerShown:false }}/>

<Stack.Screen name="Name" component={NameScreen} />
<Stack.Screen name="Title" component={TitleScreen} options={({route}) => ({title: route.params.title})} />
<Stack.Screen name="Back" component={BackScreen} />
</Stack.Navigator>
</NavigationContainer>
</PaperProvider>
);
}
