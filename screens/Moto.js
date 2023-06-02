import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Text from "../fonts/Text";
import TextB from "../fonts/TextBold";
import TextM from "../fonts/TextMedium";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const Moto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#000"} barStyle={"light-content"} />
      <Image source={require("../assets/3.jpg")} style={styles.image} />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={styles.arrow}
      >
        <Ionicons name="ios-close-sharp" size={25} color="#000" />
      </TouchableOpacity>

      <View style={styles.container2}>
        <TextB style={styles.font}>Skip traffic, save time</TextB>
        <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 25 }}>
          Request an on-demand ride on a motorcycle so you don't have to wait
          for a bus or metro. You'll save time and money and your driver will
          pick you up at your door with a helmet for you to wear.
        </Text>
      </View>

      <View style={styles.bottomButtonsContainer}>
        <Divider
          style={{
            backgroundColor: "#e9e9e9",
            width: "100%",
            marginBottom: 5,
            padding: 0.6,
          }}
        />
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Request Uber Moto</TextM>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Moto;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 210,
  },
  container2: {
    margin: 15,
    marginTop: 30,
  },
  font: {
    fontSize: 36,
    lineHeight: 42.5,
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  arrow: {
    position: "absolute",
    backgroundColor: "white",
    top: 15,
    left: 15,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
