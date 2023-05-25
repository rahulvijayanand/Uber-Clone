import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextM from "../fonts/TextMedium";

const Account = () => {
  return (
    <View style={styles.container}>
      <TextM>Account</TextM>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
