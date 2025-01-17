import { StyleSheet, View, StatusBar } from "react-native";
import React from "react";
import TextM from "../fonts/TextMedium";
import TextB from "../fonts/TextBold";
import PromoBox from "../components/Grid";
import PromoBoxL from "../components/GridL";
import car from "../assets/car.jpg";
import image2 from "../assets/suitcase.jpg";
import image3 from "../assets/rental.jpg";
import image4 from "../assets/calendar.jpg";
import image5 from "../assets/intercity.jpg";
import image6 from "../assets/package.jpg";
import Carousel from "../components/PackageCarousel";

const Services = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <TextB style={{ fontSize: 35, marginLeft: 15 }}>Services</TextB>

      <TextB style={{ fontSize: 20, marginLeft: 15, marginTop: 30 }}>
        Go anywhere, get anything
      </TextB>

      <View style={styles.container2}>
        <PromoBoxL hasBox={true} name="Ride" imageSource={car} />
        <PromoBoxL
          hasBox={false}
          name="Travel"
          imageSource={image2}
          navigation={navigation}
          screen="Travel"
        />
      </View>

      <View style={[styles.container2, { marginTop: 5 }]}>
        <PromoBox
          hasBox={true}
          name="Rentals"
          imageSource={image3}
          navigation={navigation}
          screen="Rental"
        />
        <PromoBox
          hasBox={false}
          name="Intercity"
          imageSource={image5}
          navigation={navigation}
          screen="Intercity"
        />
        <PromoBox
          hasBox={false}
          name="Package"
          imageSource={image6}
          navigation={navigation}
          screen="Package"
        />
        <PromoBox
          hasBox={false}
          name="Reserve"
          imageSource={image4}
          navigation={navigation}
          screen="Reserve"
        />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
    marginTop: 25,
  },
});
