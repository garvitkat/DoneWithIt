import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.welcomeScreen}
      blurRadius={3}
    >
      <View style={styles.logoAndText}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <AppText style={styles.tagline}>Buy and Sell</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoAndText: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 25,
  },
});
