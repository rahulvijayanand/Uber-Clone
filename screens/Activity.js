import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import TextM from "../fonts/TextMedium";
import TextB from "../fonts/TextBold";
import Text from "../fonts/Text";
import Show from "../components/Bottom";
import { Divider } from "react-native-paper";

const Activity = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextB style={{ fontSize: 35, marginLeft: 15 }}>Activity</TextB>

      <TextB style={{ fontSize: 20, marginLeft: 15, marginTop: 30 }}>
        Upcoming
      </TextB>

      <View
        style={{
          marginLeft: 15,
          marginTop: 20,
          marginRight: 15,
          borderWidth: 2,
          borderColor: "#EEEEEE",
          borderRadius: 10,
          padding: 15,
          paddingLeft: 5,
        }}
      >
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "80%", marginLeft: 10 }}>
              <TextB
                style={{
                  fontSize: 21,
                  color: "#6a6a6a",
                }}
              >
                You have no upcoming trips
              </TextB>
              <TextM
                style={{
                  fontSize: 16,
                  color: "black",
                  paddingTop: 5,
                }}
              >
                Reserve your ride ➜
              </TextM>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/calendar2.png")}
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <TextB style={{ fontSize: 20 }}>Past</TextB>
        <Show navigation={navigation} />
      </View>

      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <View
          style={{
            width: "100%",
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "#EEEEEE",
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/22.jpeg")}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 10,
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
            <TextB
              style={{
                marginTop: 20,
                fontSize: 25,
                marginLeft: 15,
              }}
            >
              Uber Auto
            </TextB>

            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                fontSize: 16,
                color: "#7b7b7b",
              }}
            >
              Dec 12 • 5:12 PM
            </Text>

            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
                fontSize: 16,
                color: "#7b7b7b",
              }}
            >
              ₹0.00 • Canceled
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 20,
  },
});
