// Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import LoginSreen from "./components/auth/Login";
import RegistrationScreen from "./components/auth/Register";
import Register from "./components/auth/Register";
import Landing from "./components/Landing";
import Background from "./components/Landing";
import DashBoard from "./components/main/Dashboard";
// import Landing from "./components/Landing";




// define the stack navigator
const Stack = createNativeStackNavigator()

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Dashboard" component={DashBoard} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginSreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App