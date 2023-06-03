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
import { Ionicons } from "@expo/vector-icons";
import CustomComponent from "../components/RentalComp";

const Intercity = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#addec9"} barStyle={"dark-content"} />
      <Image source={require("../assets/25.jpg")} style={styles.image} />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={styles.arrow}
      >
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("AS")}
        style={styles.activity}
      >
        <TextM style={{ fontSize: 13 }}>My activity</TextM>
      </TouchableOpacity>

      <View style={{ marginTop: 10, marginLeft: 22.5, marginRight: 20 }}>
        <CustomComponent
          imageSource={require("../assets/13-l.jpg")}
          text="For outstation trips to Bangalore, Puducherry, Tirupati, Vellore and more"
        />
        <CustomComponent
          imageSource={require("../assets/3-l.jpg")}
          text="Book for now or reserve for later"
        />
        <CustomComponent
          imageSource={require("../assets/11-l.jpg")}
          text="Priority chat support post trip"
        />
      </View>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Get started</TextM>
          <View style={{ position: "absolute", right: 15 }}>
            <Ionicons name="arrow-forward" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intercity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 460,
  },
  arrow: {
    position: "absolute",
    backgroundColor: "white",
    top: 10,
    left: 15,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  activity: {
    position: "absolute",
    backgroundColor: "white",
    top: 10,
    right: 15,
    width: 90,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
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
});
