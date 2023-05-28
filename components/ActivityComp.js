import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import TextB from "../fonts/TextBold";
import Text from "../fonts/Text";
import TextM from "../fonts/TextMedium";

const RideItem = ({ place, date, timing, cost }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <Image source={require("../assets/24.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <TextM style={styles.place}>{place}</TextM>
          <Text style={styles.details}>{`${date} • ${timing}`}</Text>
          <Text style={styles.details}>{`${cost}`}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.arrowText}>❯</Text>
        </View>
      </View>
      <Divider
        style={{
          backgroundColor: "gray",
          marginLeft: 85,
          width: "100%",
          marginTop: 15,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  place: {
    fontSize: 17,
  },
  details: {
    fontSize: 14,
    marginTop: 5,
  },
  rightContainer: {
    justifyContent: "center",
  },
  arrowText: {
    color: "#989898",
    right: 10,
    fontSize: 12,
  },
});

export default RideItem;
