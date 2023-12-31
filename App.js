import * as React from 'react';
import { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from '@rneui/themed';

const Stack = createNativeStackNavigator()

const FadeInView = props => {
  const fadeAnimation = useRef( new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnimation
      }}>
        {props.children}
      </Animated.View>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <FadeInView style={styles.container}>
      <Text style={styles.mainText}>Hello!</Text>
      <StatusBar style="auto" />
      <Button
          title="Go to Profile"
          onPress={()=>{navigation.navigate('Profile')}} 
      />
    </FadeInView>
  );
}

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Welcome to the Profile Page!</Text>
      <Button
          title="Go back Home"
          onPress={()=>{navigation.navigate('Home')}} 
      />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: '#fff',
    fontSize: 30
  },
  profileText: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: '500',
  }
});
