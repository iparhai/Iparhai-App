import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Splash() {
  return (
    <View style={styles.container}>
      <View>
          <Text>I am splash screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Splash;