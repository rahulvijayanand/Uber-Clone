import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import TextM from "../fonts/TextMedium";

const PromoBox = ({ hasBox, name, imageSource }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      {hasBox && (
        <View style={styles.box}>
          <TextM style={styles.promoText}>Promo</TextM>
        </View>
      )}
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <Image source={imageSource} style={styles.image} />
        </View>
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
    left: 10,
    zIndex: 1,
  },
  promoText: {
    fontSize: 12,
    color: "#fff",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",

  },
  imageBox: {
    height: 60,
    width: 75,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  nameText: {
    fontSize: 12,
    color: "#333333",
    marginTop: 5,
    textAlign: "center",
  },
});

export default PromoBox;
