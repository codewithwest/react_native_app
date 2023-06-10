import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider, IconButton, DefaultTheme,PopStateEvent, AppRegistry } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './DashBoard/Feed'
import Profile from './DashBoard/Profile'
import Notifications from './DashBoard/Notifications'


const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

function MyTabs() {
  
 

  return (
    <Tab.Navigator
      initialRouteName="Services"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Services"
        component={Feed}
        options={{headerLeft: () => (
          <IconButton icon="logout" onPress={()=>{}} color={DefaultTheme.colors.notification}/>
          ),
          headerTitleAlign: 'center',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MyFunction() {
  return (
    
      <MyTabs />
   
  );
}
