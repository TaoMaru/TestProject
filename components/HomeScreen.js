import FadeInView from "./views/FadeInView";
import {Text, Button, StatusBar} from 'react-native'
import styles from "./stylesheets/styles";

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

  export default HomeScreen