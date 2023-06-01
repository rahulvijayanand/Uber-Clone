import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "../components/PackageCarousel";
import Text from "../fonts/Text";
import TextM from "../fonts/TextMedium";
import TextB from "../fonts/TextBold";
import { Ionicons } from "@expo/vector-icons";

const Package = ({ navigation }) => {
  const images = [
    require("../assets/u1.jpg"),
    require("../assets/u2.jpg"),
    require("../assets/u3.jpg"),
    require("../assets/u4.jpg"),
  ];

  const titles = [
    "Leave something behind?",
    "Move supplies across town",
    "Surprise them with a gift",
    "Delight your customers",
  ];
  const descriptions = [
    "Get your keys or glasses back without a second trip.",
    "From printer ink to auto parts, get it delivered.",
    "Drop off some flowers or gifts to your loved ones.",
    "Level up your business with same-day delivery.",
  ];
  const staticText = "Get Started ➜";
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <TextB style={styles.headerText}>Package Delivery</TextB>
      </View>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 25 }}>
        <Carousel
          images={images}
          titles={titles}
          descriptions={descriptions}
          staticText={staticText}
        />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Send a package</TextM>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.receiveButton}>
          <TextM style={[styles.buttonText, { color: "#000" }]}>
            Receive a package
          </TextM>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  headerText: {
    fontSize: 20,
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  sendButton: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 7.5,
    marginBottom: 10,
  },
  receiveButton: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 7.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
