import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; //View -> div , text --> to display text on screen

export default function App() {
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //Like CSS
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
