import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
  SafeAreaView, 
  View, Dimensions, Image} from 'react-native';
import Card from './app/components/Card';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
   <ListingsScreen/>
  );
}

