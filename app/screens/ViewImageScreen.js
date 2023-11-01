import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import color from "../config/color";

function ViewImageScreen() {
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <View
          style={[
            styles.box,
            { backgroundColor: color.primary, marginLeft: 30 },
          ]}
        />
        <View
          style={[
            styles.box,
            { backgroundColor: color.secondary, marginRight: 30 },
          ]}
        />
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    top: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default ViewImageScreen;
