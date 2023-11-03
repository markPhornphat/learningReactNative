import React from "react";
import { Pressable, Text, View, StyleSheet, Image } from "react-native";

export const AddAssignmentButton = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.greyLine}>
        <Pressable style={styles.addAssignmentBut}>
          <Image source={require("../assets/icons/plusIcon.png")} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  greyLine: {
    width: 326,
    height: 2,
    backgroundColor: "#4E4E61",
  },
  addAssignmentBut: {
    width: 48,
    height: 48,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
