import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
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
import Carousel from "../components/Carousel";

const Home = ({ navigation }) => {
  const images = [
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
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={{ alignItems: "center" }}>
        <SearchBar />
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
        <PromoBox hasBox={true} name="Ride" imageSource={car} />
        <PromoBox hasBox={false} name="Travel" imageSource={image2} />
        <PromoBox hasBox={true} name="Rentals" imageSource={image3} />
        <PromoBox hasBox={false} name="Reserve" imageSource={image4} />
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
          <Display
            image={image5}
            title="Uber Moto rides"
            desc="Affordable motorcycle pickups"
            screen="Moto"
            navigation={navigation}
          />
          <Display
            image={image6}
            title="Auto rides"
            desc="Upfront fares, doorstep pickups"
            screen="Auto"
            navigation={navigation}
          />
        </ScrollView>
      </View>

      <View style={{ margin: 15, marginBottom: 10, marginTop: 30 }}>
        <Carousel images={images} />
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
          <Display
            image={image11}
            title="Send a package"
            desc="On-demand delivery across town"
            screen="Package"
            navigation={navigation}
          />
          <Display
            image={image12}
            title="Safety Toolkit"
            desc="On-trip help with safety issues"
            screen="Safety"
            navigation={navigation}
          />
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
          <Display
            image={image7}
            title="Reserve and relax"
            desc="Book up to 90 days ahead"
            screen="Reserve"
            navigation={navigation}
          />
          <Display
            image={image9}
            title="Rentals"
            desc="Ride from 1 to 12 hours"
          />
          <Display
            image={image10}
            title="For XL groups"
            desc="Comfortable rides for your group"
            screen="UberXL"
            navigation={navigation}
          />
          <Display
            image={image8}
            title="Travel Intercity"
            desc="Go outstation with ease"
          />
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
