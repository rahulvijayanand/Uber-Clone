import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextM from "../fonts/TextMedium";

const PromoBoxL = ({ hasBox, name, imageSource }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      {hasBox && (
        <View style={styles.box}>
          <TextM style={styles.promoText}>Promo</TextM>
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
        <TextM style={styles.nameText}>{name}</TextM>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    backgroundColor: "#038447",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: "absolute",
    top: -7.5,
    left: 55,
    zIndex: 1,
  },
  promoText: {
    fontSize: 12,
    color: "#fff",
  },
  imageContainer: {
    height: 80,
    width: 170,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
    top: 5,
    alignSelf: "center",
  },
  nameText: {
    fontSize: 16,
    color: "#333333",
    marginTop: 5,
    textAlign: "center",
    position: "absolute",
    left: 15,
    bottom: 10,
  },
});

export default PromoBoxL;
