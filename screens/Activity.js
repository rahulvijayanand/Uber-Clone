import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextM from "../fonts/TextMedium";

const Activity = () => {
  return (
    <View style={styles.container}>
      <TextM>Activity</TextM>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
