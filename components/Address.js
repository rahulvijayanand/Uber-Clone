import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import TextM from "../fonts/TextMedium";

const Address = ({ name, address }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="location-on" size={24} color="black" />
        </View>
      </View>
      <TouchableOpacity style={styles.middleContainer}>
        <TextM numberOfLines={1} style={styles.nameText}>
          {name}
        </TextM>
        <TextM numberOfLines={1} style={styles.addressText}>
          {address}
        </TextM>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <Text style={styles.arrowText}>❯</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    width: "100%",
  },
  leftContainer: {
    paddingTop: 5,
    alignSelf: "center",
  },
  iconContainer: {
    backgroundColor: "#EEEEEE",
    borderRadius: 25,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    paddingLeft: 15,
    width: "80%",
  },
  nameText: {
    fontSize: 18,
    width: "90%",
  },
  addressText: {
    fontSize: 14,
    paddingTop: 5,
    color: "#989898",
    width: "90%",
  },
  rightContainer: {
    justifyContent: "center",
  },
  arrowText: {
    color: "#989898",
    right: 10,
  },
});

export default Address;
