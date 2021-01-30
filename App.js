import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator theme={navigationTheme} />
    </NavigationContainer>
  );
}
