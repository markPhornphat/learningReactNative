import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.imageBack}
    >
      <View style={styles.topBar}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <Text> Sell What You Don't Need </Text>
      </View>
      <View style={styles.bottomBar}>
        <Pressable style={[styles.button, { backgroundColor: "#fc5c65" }]}>
          <Text>Login</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: "#4ECDC4" }]}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    top: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
  },
  imageBack: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
