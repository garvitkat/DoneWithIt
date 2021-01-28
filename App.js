import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
const itemData = [
  {
    value: 1,
    label: "Cat1",
  },
  {
    value: 2,
    label: "Cat2",
  },
  {
    value: 3,
    label: "Cat3",
  },
];

export default function App() {
  const [item, setItem] = useState(itemData[0]);
  console.log("App Executed");
  return (
    // <View style={styles.container}>
    //   <Card
    //     title="Red Jacket for Sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />

    //   {/* <AppButton title="Login" onPress={() => console.log("Button Tapped")} /> */}
    // </View>
    <Screen>
      {/* <AppTextInput icon="email" placeholder="Username" /> */}
      <AppPicker
        icon="apps"
        items={itemData}
        selectedItem={item}
        onSelectItem={(item) => setItem(item)}
        placeholder="Category"
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#f8f4ff",
//     padding: 20,
//     paddingTop: 100,
//   },
// });
