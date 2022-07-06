import React from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Splash() {
  return (
    <>
      <ImageBackground
        source={require('../screen_images/images/splashScreen.jpg')}
        style={styles.container}
      >
        <View style={styles.Text__Holder}>
          <Text style={styles.Text}>
            2021 National University Of Sceince And
            Technology-FAST, Karachi, Pakistan
          </Text>
        </View>
      </ImageBackground>
      <Image
        source={require('../screen_images/images/iparhai_logo.png')}
        style={styles.logo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  logo: {
    position: 'absolute',
    top: '33%',
    left: '33%',
    // transform : [{translateX : -30},{translateY : -25}]
  },
  Text__Holder: {
    marginBottom: 10,
  },
  Text : {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize : 18,
    // fontFamily: "lucida grande",
    // opacity : 0.4,
  }
});

export default Splash;