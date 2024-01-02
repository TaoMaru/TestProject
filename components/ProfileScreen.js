import {View, Text, Button} from 'react-native'
import styles from './stylesheets/styles';
import darkStyles from './stylesheets/darkStyles';

const ProfileScreen = ({route, navigation}) => {
    const {darkMode, setDarkMode} = route.params
    return (
      <View style={darkMode ? darkStyles.container : styles.container}>
        <Text style={darkMode ? darkStyles.profileText : styles.profileText}>Welcome to the Profile Page!</Text>
        <Button
            title="Go back Home"
            onPress={()=>{navigation.navigate('Home', {darkMode: darkMode, setDarkMode: setDarkMode})}} 
        />
      </View>
    );
  }

  export default ProfileScreen