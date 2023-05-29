import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Text from "../fonts/Text";
import TextM from "../fonts/TextMedium";

const Display = ({ navigation, title, image, desc }) => {
  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          source={image}
          style={{ width: 220, height: 120, borderRadius: 10 }}
        />
        <TextM style={{ fontSize: 16, paddingTop: 10 }}>{title} ➜</TextM>
        <Text
          style={{ fontSize: 14, width: 215, paddingTop: 5, color: "gray" }}
        >
          {desc}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Display;
