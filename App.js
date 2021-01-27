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
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/Button";
import Card from "./app/components/Card";

export default function App() {
  console.log("App Executed");
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket for Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />

      {/* <AppButton title="Login" onPress={() => console.log("Button Tapped")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4ff",
    padding: 20,
    paddingTop: 100,
  },
});
