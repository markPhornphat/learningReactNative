import { StatusBar } from "expo-status-bar"; //React Native --> Not have HTML --> Use View instead to group the elements
import { useState } from "react";
import LearnFromYouTube from "./app/screens/LearnFromYouTube";
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
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
//SafeAreaView --> Make some padding-top to make rext readable on iPhone (Work on IOS)

export default function App() {
  return <LearnFromYouTube />;
}
