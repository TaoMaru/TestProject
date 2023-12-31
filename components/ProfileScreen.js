import {View, Text, Button} from 'react-native'
import styles from './stylesheets/styles';

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

  export default ProfileScreen