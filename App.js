import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from '@rneui/themed';
import { useState } from 'react';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
           initialParams={{
            darkMode: darkMode,
            setDarkMode: setDarkMode
           }
           }/>
        <Stack.Screen name="Profile" component={ProfileScreen} 
          options={({ route, navigation }) => ({
            darkMode: darkMode,
            setDarkMode: setDarkMode
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
