import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Icon } from "@rneui/themed";
import { Divider } from "react-native-paper";
import TextM from "../fonts/TextMedium";
import TextB from "../fonts/TextBold";
import TextL from "../fonts/TextLight";

const Account = ({ navigation }) => {
  const listData = [
    { icon: "card-giftcard", text: "Send a gift" },
    { icon: "settings", text: "Settings" },
    { icon: "mail", text: "Messages" },
    { icon: "person", text: "Earn by driving or delivering" },
    { icon: "business-center", text: "Business hub" },
    { icon: "info", text: "Legal" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextB style={styles.name}>Rahul Vijayanand</TextB>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/17.jpeg")}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.ratingContainer}>
        <Icon name="star" color="black" />
        <TextM style={styles.rating}>5.0</TextM>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imagesContainer}>
          <TouchableOpacity>
            <Image source={require("../assets/18.jpg")} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/19.jpg")} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/20.jpg")} style={styles.image} />
          </TouchableOpacity>
        </View>

        <Divider style={styles.divider} />

        {listData.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity style={styles.listItemButton}>
              <Icon
                name={item.icon}
                color="black"
                size={18}
                style={{ marginTop: 2 }}
              />
              <View style={styles.listItemTextContainer}>
                <TextM style={styles.listItemText}>{item.text}</TextM>
              </View>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.versionContainer}>
          <TextL style={styles.version}>v4.465.10001</TextL>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 35,
    paddingTop: 50,
    marginLeft: 5,
    width: 250,
  },
  profileImageContainer: {
    paddingTop: 70,
    paddingLeft: 25,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  ratingContainer: {
    height: 30,
    width: 60,
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    marginLeft: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    paddingLeft: 5,
  },
  scrollView: {
    height: "100%",
  },
  imagesContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 105,
    height: 85,
    borderRadius: 10,
    resizeMode: "contain",
  },
  divider: {
    backgroundColor: "#EEEEEE",
    padding: 5,
    marginTop: 10,
  },
  listItem: {
    paddingTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  listItemButton: {
    flexDirection: "row",
    width: 300,
    paddingLeft: 15,
  },
  listItemTextContainer: {
    paddingLeft: 25,
  },
  listItemText: {
    fontSize: 16,
  },
  versionContainer: {
    marginLeft: 20,
    marginRight: 15,
    paddingTop: 20,
  },
  version: {
    color: "#ABABAB",
  },
});

export default Account;
