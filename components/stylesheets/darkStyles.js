import { StyleSheet } from "react-native";

const darkStyles = StyleSheet.create({
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

export default darkStyles