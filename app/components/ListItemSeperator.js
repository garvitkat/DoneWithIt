import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "95%",
    height: 1.25,
    alignSelf: "center",
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
