import {useEffect, useRef} from 'react'
import {View, Animated} from 'react-native'

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

  export default FadeInView