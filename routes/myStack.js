import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import Pool from '../screens/pool';
import ProfileScreen from '../screens/profileScreen';
import Categories from '../screens/categories';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Pool" component={Pool}/>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}