import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "../components/PackageCarousel";
import Text from "../fonts/Text";
import TextM from "../fonts/TextMedium";
import TextB from "../fonts/TextBold";

const Package = () => {
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
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextB style={{ fontSize: 20, alignSelf: "center" }}>
          Package Delivery
        </TextB>
      </View>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 25 }}>
        <Carousel
          images={images}
          titles={titles}
          descriptions={descriptions}
          staticText={staticText}
        />
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            margin: 15,
            borderRadius: 7.5,
            marginTop: 30,
          }}
        >
          <TextM style={{ color: "#fff", fontSize: 18 }}>Send a package</TextM>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: StatusBar.currentHeight + 20,
  },
});
