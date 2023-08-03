import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextM from "../fonts/TextMedium";
import SearchBar from "../components/Search";
import Address from "../components/Address";
import { Divider } from "react-native-paper";
import TextB from "../fonts/TextBold";
import PromoBox from "../components/Grid";
import Display from "../components/Display";
import car from "../assets/car.jpg";
import image2 from "../assets/suitcase.jpg";
import image3 from "../assets/rental.jpg";
import image4 from "../assets/calendar.jpg";
import image5 from "../assets/3.jpg";
import image6 from "../assets/4.jpg";
import image7 from "../assets/5.jpeg";
import image8 from "../assets/6.jpeg";
import image9 from "../assets/7.jpeg";
import image10 from "../assets/8.jpeg";
import image11 from "../assets/9.jpg";
import image12 from "../assets/10.jpeg";
import image13 from "../assets/13.jpg";
import image14 from "../assets/2.jpg";
import Carousel from "../components/Carousel";
import * as NavigationBar from "expo-navigation-bar";

const Home = ({ navigation }) => {
  NavigationBar.setBackgroundColorAsync("#f6f6f6");

  const image = [
    require("../assets/c1.jpg"),
    require("../assets/c2.jpg"),
    require("../assets/c3.jpg"),
    require("../assets/c4.jpg"),
    require("../assets/c5.jpg"),
    require("../assets/c6.jpg"),
    require("../assets/c7.jpg"),
    require("../assets/c8.jpg"),
    require("../assets/c9.jpg"),
  ];

  const suggestions = [
    {
      name: "Ride",
      imageSource: car,
      hasBox: true,
      screen: null,
    },
    {
      name: "Travel",
      imageSource: image2,
      hasBox: false,
      screen: null,
    },
    {
      name: "Rentals",
      imageSource: image3,
      hasBox: true,
      screen: "Rental",
    },
    {
      name: "Reserve",
      imageSource: image4,
      hasBox: false,
      screen: "Reserve",
    },
  ];

  const waysToSave = [
    {
      image: image14,
      title: "Add a stop or 5",
      desc: "Book up to 90 days ahead",
      screen: "AddStop",
    },
    {
      image: image5,
      title: "Uber Moto rides",
      desc: "Affordable motorcycle pickups",
      screen: "Moto",
    },
    {
      image: image6,
      title: "Auto rides",
      desc: "Upfront fares, doorstep pickups",
      screen: "Auto",
    },
  ];

  const moreWaysToUse = [
    {
      image: image12,
      title: "Safety Toolkit",
      desc: "On-trip help with safety issues",
      screen: "Safety",
    },
    {
      image: image11,
      title: "Send a package",
      desc: "On-demand delivery across town",
      screen: "Package",
    },
    {
      image: image13,
      title: "Premier rides",
      desc: "Top-rated drivers, newer cars",
      screen: "Premier",
    },
  ];

  const waysToPlan = [
    {
      image: image7,
      title: "Reserve and relax",
      desc: "Book up to 90 days ahead",
      screen: "Reserve",
    },
    {
      image: image8,
      title: "Travel Intercity",
      desc: "Go outstation with ease",
      screen: "Intercity",
    },
    {
      image: image10,
      title: "For XL groups",
      desc: "Comfortable rides for your group",
      screen: "UberXL",
    },
    {
      image: image9,
      title: "Rentals",
      desc: "Ride from 1 to 12 hours",
      screen: "Rental",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />

      <View style={{ alignItems: "center" }}>
        <SearchBar navigation={navigation} />
      </View>

      <View style={{ paddingTop: 25 }}>
        <Address
          name="Decathlon Connect - Express Avenue"
          address="S - 103, First Floor Express Avenue Mall, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014"
        />
      </View>

      <Divider
        style={{
          backgroundColor: "gray",
          marginLeft: 65,
          width: "100%",
          marginTop: 25,
        }}
      />

      <View style={{ paddingTop: 25 }}>
        <Address
          name="VR Chennai"
          address="100 Feet Rd, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 35,
          paddingLeft: 15,
          justifyContent: "space-between",
        }}
      >
        <TextB style={{ fontSize: 20, alignSelf: "center" }}>Suggestions</TextB>
        <TouchableOpacity
          onPress={() => navigation.navigate("SS")}
          style={{ alignSelf: "center", paddingRight: 20 }}
        >
          <TextM style={{ fontSize: 15 }}>See All</TextM>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        {suggestions.map((item, index) => (
          <PromoBox
            key={index}
            hasBox={item.hasBox}
            name={item.name}
            imageSource={item.imageSource}
            navigation={navigation}
            screen={item.screen}
          />
        ))}
      </View>

      <View style={{ margin: 15, marginBottom: 10, marginTop: 30 }}>
        <Carousel images={image} />
      </View>

      <View style={{ paddingTop: 25 }}>
        <TextB style={{ fontSize: 20, marginLeft: 15 }}>
          More ways to use Uber
        </TextB>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 10, paddingLeft: 15 }}
        >
          {moreWaysToUse.map((item, index) => (
            <Display
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              screen={item.screen}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ paddingTop: 25 }}>
        <TextB style={{ fontSize: 20, marginLeft: 15 }}>
          Ways to plan with Uber
        </TextB>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 10, paddingLeft: 15 }}
        >
          {waysToPlan.map((item, index) => (
            <Display
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              screen={item.screen}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TextB style={{ fontSize: 20, marginLeft: 15 }}>
          Ways to save with Uber
        </TextB>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 10, paddingLeft: 15 }}
        >
          {waysToSave.map((item, index) => (
            <Display
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              screen={item.screen}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ paddingBottom: 40 }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
    paddingTop: 20,
  },
});
