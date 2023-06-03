import React from "react";
import { View, Image } from "react-native";
import TextM from "../fonts/TextMedium";

const RentalComponent = ({ imageSource, text }) => {
  return (
    <View>
      <View style={{ marginTop: 20, flexDirection: "row", width: 330 }}>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={imageSource}
            style={{
              width: 17,
              height: 17,
              resizeMode: "contain",
            }}
          />
        </View>
        <TextM style={{ fontSize: 17, marginLeft: 25, lineHeight:23 }}>{text}</TextM>
      </View>
    </View>
  );
};

export default RentalComponent;
