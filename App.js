import { StatusBar } from "expo-status-bar";
import React from "react";
import Welcome from "./app/screens/Welcome";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Touchable,
  View,
} from "react-native";

export default function App() {
  console.log("App Executed");
  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
