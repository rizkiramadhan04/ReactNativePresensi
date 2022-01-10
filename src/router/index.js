import React from 'react'
import { BottomNavigator } from '../component';
import { SignIn, SignUp, SplashScreen, Home, Presensi, Izin, SuccessPage, DetailIzin } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
       

        <Tab.Navigator tabBar={(props) => <BottomNavigator {...props}/> }>

            <Tab.Navigator>

                <Tab.Screen
                    name = "Home"
                    Component = { Home }
                />

            </Tab.Navigator>
       
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name = "SplashScreen"
                component = { SplashScreen }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "SignIn"
                component = { SignIn }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "SignUp"
                component = { SignUp }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "MainApp"
                component = { MainApp }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "Home"
                component = { Home }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "Presensi"
                component = { Presensi }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "Izin"
                component = { Izin }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "DetailIzin"
                component = { DetailIzin }
                options = {{ headerShown: false }}
            />

            <Stack.Screen
                name = "SuccessPage"
                component = { SuccessPage }
                options = {{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default Router;
