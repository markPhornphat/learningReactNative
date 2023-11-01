import { StatusBar } from "expo-status-bar"; //React Native --> Not have HTML --> Use View instead to group the elements
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
  Alert,
  Button,
  Pressable,
  Platform,
} from "react-native"; //View -> div , text --> to display text on screen |
//SafeAreaView --> Make some padding-top to make rext readable on iPhone (Work on IOS)

export default function App() {
  const handlePress = () => console.log("Text Pressed!");
  let [count, functionCount] = useState(0);
  const handlePressCount = () => functionCount((count = count + 1));
  const handlePressCountDown = () => functionCount(count--);
  //console.log(Dimensions.get("screen")); //To see the screen size detail

  return (
    //Can define style as ARRAY!
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableHighlight onPress={() => console.log("Image Tap!")}>
        <Image
          blurRadius={0}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="black"
        title="Click Me!"
        onPress={
          () =>
            // Alert.alert("My Title", "My massage", [  //To alert user
            //   { text: "Yes", onPress: () => console.log("Clicked Yes") },
            //   { text: "No", onPress: () => console.log("Clicked No") },
            // ])
            Alert.prompt("My title", "My massage", (text) => console.log(text)) //To input the message
        }
      />
      <View style={styles.continner}>
        <Pressable style={styles.button} onPress={handlePressCount}>
          <Text style={{ color: "white", fontSize: 20 }}>Count Up</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePressCountDown}>
          <Text style={{ color: "white", fontSize: 20 }}>Count Down</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>{count}</Text>
      <View
        style={{
          backgroundColor: "dodgerblue",
        }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  //Declare "StyleSheet.create" --> To validate the syntax like CSS unless it will not notify the ERROR
  //Like CSS
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //To check --> IF andriod padding-top = current height of the top bar
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 120,
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 25,
    paddingTop: 20,
  },
  continner: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
