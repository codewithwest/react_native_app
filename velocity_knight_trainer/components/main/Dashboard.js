import * as React from 'react';
import { Alert, BackHandler, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './components/SettingsScreen';
import StartScreen from './components/StartScreen';
import ProfileScreen from './components/ProfileScreen'
const Tab = createBottomTabNavigator();
// onPress={() => navigation.goBack()}
function MyTabs() {
    const exitApp = () => React.useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want Exit App', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    return (
        <Tab.Navigator
            initialRouteName='Start'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Start') exitApp
                    let iconName;
                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    else if (route.name === 'Start') {
                        exitApp
                        iconName = focused ? 'play' : 'play-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center',
            })}>
            <Tab.Screen name="Start" component={StartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function Dashboard() {
    return (

        <MyTabs />

    );
}
