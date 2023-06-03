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

const Rental = () => {
  return (
    <View style={styles.container}>
      <Text>Rental</Text>
    </View>
  );
};

export default Rental;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
