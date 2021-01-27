import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItemDeleteAction from "../components/LastItemDeleteAction";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Garvit.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Garvit.jpg"),
  },
];
export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Pressed", item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => console.log(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
