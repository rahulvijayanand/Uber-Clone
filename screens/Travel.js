import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Text from "../fonts/Text";
import TB1 from "../components/TBottom1";

const TravelPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => console.log("Go back")}>
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
      <TB1 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
