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

const Safety = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={"#000"} barStyle={"light-content"} />

        <Image source={require("../assets/10.jpeg")} style={styles.image} />

        <View style={styles.container2}>
          <TextB style={styles.font}>Your one-stop shop for safety tools</TextB>
          <Text style={{ fontSize: 18, marginTop: 20, lineHeight: 25 }}>
            Our Safety Toolkit is available in every ride you take with Uber.
            Just tap the blue safety shield on the map to access a variety of
            safety features.
          </Text>

          <Text style={{ fontSize: 18, marginTop: 40, lineHeight: 25 }}>
            Wherever you are, you can always contact emergency service and
            report safety concern directly through the app. You can also add one
            or more loved ones as trusted contacts and receive automatic prompts
            to share your trip information with them in real time.
          </Text>
        </View>
        
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
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Add a trusted contact</TextM>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={styles.arrow}
      >
        <Ionicons name="ios-close-sharp" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Safety;

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
    backgroundColor: "white",
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
