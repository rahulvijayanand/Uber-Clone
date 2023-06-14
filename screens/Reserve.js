import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import TextB from "../fonts/TextBold";
import TextM from "../fonts/TextMedium";
import Text from "../fonts/Text";
import CustomComponent from "../components/ReserveComp";
import { Ionicons } from "@expo/vector-icons";

const Reserve = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image source={require("../assets/reserve.jpg")} style={styles.image} />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={styles.arrow}
      >
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <View style={styles.container2}>
        <TextB style={styles.text}>Reserve</TextB>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 90, marginLeft: 25, marginRight: 25 }}
      >
        <CustomComponent
          imageSource={require("../assets/8-l.jpeg")}
          text="Choose your exact pickup time up to 90 days in advance"
          showDivider
        />
        <CustomComponent
          imageSource={require("../assets/9-l.jpeg")}
          text="Extra wait time included to meet your ride"
          showDivider
        />
        <CustomComponent
          imageSource={require("../assets/10-l.jpeg")}
          text="Cancel at no charge up to 60 minutes in advance"
        />
        <View style={{marginBottom:100}}/>
      </ScrollView>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Reserve a ride</TextM>
          <View style={{ position: "absolute", right: 15 }}>
            <Ionicons name="arrow-forward" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reserve;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  container2: {
    position: "absolute",
    top: 285,
    backgroundColor: "white",
    left: 0,
    right: 0,
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    fontSize: 52,
    marginLeft: 20,
    marginTop: 20,
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
    marginHorizontal: 20,
    borderRadius: 7.5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  arrow: {
    position: "absolute",
    backgroundColor: "white",
    top: 30,
    left: 15,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
