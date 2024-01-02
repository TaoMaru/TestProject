import FadeInView from "./views/FadeInView";
import {Text, Button, StatusBar} from 'react-native'
import styles from "./stylesheets/styles";
import darkStyles from "./stylesheets/darkStyles";
import { useEffect, useState } from "react";

const HomeScreen = ({route, navigation}) => {
    const {darkMode, setDarkMode} = route.params
    
    useEffect(()=>{
        console.log(route)
    }, [])
    useEffect(()=> {
        console.log(darkMode)
    }, [darkMode])
    return (
      <FadeInView style={darkMode ? darkStyles.container : styles.container}>
        <Button title="Toggle Screen Mode" onPress={()=>setDarkMode(!darkMode)}/>
        <Text style={darkMode ? darkStyles.mainText : styles.mainText}>Hello!</Text>
        {/* <StatusBar style="auto" /> */}
        <Button
            title="Go to Profile"
            onPress={()=>{navigation.navigate('Profile', {darkMode: route.params.darkMode, setDarkMode: route.params.setDarkMode})}} 
        />
      </FadeInView>
    );
  }

  export default HomeScreen