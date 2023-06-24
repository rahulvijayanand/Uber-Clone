import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Text from "../fonts/Text";
import TextM from "../fonts/TextMedium";
import TB1 from "../components/TBottom1";

const TravelPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={29} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Uber Travel</Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => console.log("Open activity dots")}
        >
          <Ionicons name="ellipsis-horizontal-sharp" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 230,
        }}
      >
        <Image
          source={require("../assets/travel.jpg")}
          style={{ height: 140, width: 130, resizeMode: "contain" }}
        />
        <TextM style={{ fontSize: 18, marginTop: 20 }}>No upcoming trips</TextM>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 250,
            textAlign: "center",
            color: "gray",
          }}
        >
          We'll notify you when we find any upcoming trips.
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 50, right: 25 }}>
        <TB1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    alignSelf: "center",
  },
});

export default TravelPage;
