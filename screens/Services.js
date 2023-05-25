import { StyleSheet, Text, View, StatusBar } from "react-native";
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

const Services = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 15 }}>
        <TextB style={{ fontSize: 40 }}>Services</TextB>
      </View>

      <View style={{ marginTop: 30, marginLeft: 15 }}>
        <TextB style={{ fontSize: 20 }}>Go anywhere, get anything</TextB>
      </View>

      <View style={styles.container2}>
        <PromoBoxL hasBox={true} name="Ride" imageSource={car} />
        <PromoBoxL hasBox={false} name="Travel" imageSource={image2} />
      </View>

      <View style={[styles.container2, { marginTop: 5 }]}>
        <PromoBox hasBox={true} name="Rentals" imageSource={image3} />
        <PromoBox hasBox={false} name="Intercity" imageSource={image5} />
        <PromoBox hasBox={false} name="Package" imageSource={image6} />
        <PromoBox hasBox={false} name="Reserve" imageSource={image4} />
      </View>
    </View>
  );
};

export default Services;

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
    marginTop: 25,
  },
});
