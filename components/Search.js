import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import TextB from "../fonts/TextBold";
import TextM from "../fonts/TextMedium";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer}>
        <Feather name="search" size={26} style={styles.searchIcon} />
        <TextB style={styles.searchText}>Where to?</TextB>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.rightContainer}>
        <MaterialCommunityIcons
          name="clock-time-three"
          size={24}
          color="black"
          style={{ marginLeft: 10, alignSelf: "center" }}
        />
        <TextM style={styles.nowText}>Now</TextM>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color="black"
          style={{ marginLeft: 5, alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: "#eee",
    marginHorizontal: 25,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 5,
    color: "#000",
  },
  searchText: {
    fontSize: 20,
    color: "#545454",
    alignSelf: "center",
  },
  divider: {
    width: 2,
    height: "70%",
    backgroundColor: "#e6e6e6",
    marginHorizontal: 10,
  },
  rightContainer: {
    paddingVertical: 5,
    width: "40%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  nowText: {
    fontSize: 17,
    color: "#000",
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default SearchBar;
