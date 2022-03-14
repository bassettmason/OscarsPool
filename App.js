import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Pool from './screens/Pool';
import ProfileScreen from './screens/ProfileScreen';
import Categories from './screens/Categories';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Pool" component={Pool}/>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
