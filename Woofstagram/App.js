import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider, AuthContext } from './AuthContext';
import AnotherScreen from './AnotherScreen'; 
import FeedScreen from './FeedScreen'; 
import LoginScreen from './LoginScreen'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blog" component={FeedScreen} />
      <Tab.Screen name="Browse" component={AnotherScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator=()=> {
  const { hasUser } = useContext(AuthContext);
  return(
    <Stack.Navigator>
      {hasUser
      ? (<Stack.Screen name="Home" component={MyTabs} />)
      : (<Stack.Screen name="Login" component={LoginScreen}/>)
      }
      
    </Stack.Navigator>
  )
}
export default function App() {
  return(
    <AuthProvider>
     <NavigationContainer>
       <AppNavigator />
     </NavigationContainer>
   </AuthProvider>

  )

}

