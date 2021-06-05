import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import React from 'react';

const Stack = createStackNavigator();

function AuthNavigator() {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}
        options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
    )
};

export default AuthNavigator;