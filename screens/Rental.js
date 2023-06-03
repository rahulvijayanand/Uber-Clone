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
import CustomComponent from "../components/RentalComp";

const Rental = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#eff3fe"} barStyle={"dark-content"} />
      <Image source={require("../assets/26.jpg")} style={styles.image} />

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
        <Image source={require("../assets/8-l.jpeg")} style={styles.trips} />
        <TextM style={{ fontSize: 14 }}>Upcoming Trips</TextM>
      </TouchableOpacity>

      <View style={styles.container2}>
        <Image source={require("../assets/7-l.png")} style={styles.sale} />
        <TextM style={{ alignSelf: "center", fontSize: 16 }}>
          20% promotion applied
        </TextM>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 5, marginLeft: 22.5, marginRight: 20 }}
      >
        <CustomComponent
          imageSource={require("../assets/9-l.jpeg")}
          text="Keep a car and driver for up to 12 hours"
        />
        <CustomComponent
          imageSource={require("../assets/12-l.jpg")}
          text="Ideal for business meetings, tourist travel and multiple stop trips"
        />
        <CustomComponent
          imageSource={require("../assets/3-l.jpg")}
          text="Book for now or reserve for later"
        />
      </ScrollView>

      <View style={styles.bottomButtonsContainer}>
        <Divider
          style={{
            backgroundColor: "#e9e9e9",
            width: "100%",
            marginBottom: 5,
            padding: 0.6,
          }}
        />

        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            marginLeft: 15,
          }}
        >
          <View>
            <TextM style={{ fontSize: 18, marginTop: 10 }}>Starting at</TextM>
          </View>

          <View style={{ position: "absolute", right: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/7-l.png")}
                style={styles.sale}
              />
              <TextM style={{ alignItems: "flex-end", fontSize: 16 }}>
                ₹346.63/hour
              </TextM>
            </View>
            <Text
              style={{
                alignItems: "flex-end",
                right: 0,
                position: "absolute",
                top: 25,
                fontSize: 13,
                textDecorationLine: "line-through",
                color: "#747474",
              }}
            >
              ₹433.29/hour
            </Text>
          </View>
        </View>

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

export default Rental;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 380,
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
    width: 150,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
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
  container2: {
    backgroundColor: "#e6f2ee",
    width: Dimensions.get("window").width - 30,
    height: 40,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  sale: {
    height: 25,
    width: 25,
    alignSelf: "center",
    marginLeft: 25,
  },
  trips: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: 5,
  },
});
