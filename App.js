import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/bg.jpg')}
        style={styles.backgroundImage}>
        <Image source={require("./assets/School-time-Table-template-1.jpg")}
        styles={styles.iconImage} />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
  iconImage:{
    height:400,
    width:400,
    aspectRatio:2,
    resizeMode:'contain'
  }
});
