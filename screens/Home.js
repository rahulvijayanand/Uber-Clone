import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import TextM from "../fonts/TextMedium";
import SearchBar from "../components/Search";
import Address from "../components/Address";
import { Divider } from "react-native-paper";
import TextB from "../fonts/TextBold";
import PromoBox from "../components/Grid";
import car from "../assets/car.jpg";
import image2 from "../assets/suitcase.jpg";
import image3 from "../assets/rental.jpg";
import image4 from "../assets/calendar.jpg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <SearchBar />
      </View>

      <View style={{ marginTop: 25 }}>
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

      <View style={{ marginTop: 25 }}>
        <Address
          name="VR Chennai"
          address="100 Feet Rd, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 35,
          marginLeft: 15,
          justifyContent: "space-between",
        }}
      >
        <TextB style={{ fontSize: 20, alignSelf: "center" }}>Suggestions</TextB>
        <TouchableOpacity
          onPress={() => navigation.navigate("SS")}
          style={{ alignSelf: "center", marginRight: 20 }}
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
    marginTop: 20,
  },
});
