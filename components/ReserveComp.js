import React from "react";
import { View, Image } from "react-native";
import TextL from "../fonts/TextLight";
import { Divider } from "react-native-paper";

const CustomComponent = ({ imageSource, text, showDivider }) => {
  return (
    <View>
      <View style={{ marginTop: 15, flexDirection: "row", width: 300 }}>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={imageSource}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <TextL style={{ fontSize: 17, marginLeft: 10 }}>{text}</TextL>
      </View>
      {showDivider && (
        <View style={{ paddingTop: 10, width: "100%", marginLeft: 40 }}>
          <Divider
            style={{ backgroundColor: "#e5e5e5", width: "86%", padding: 0.5 }}
          />
        </View>
      )}
    </View>
  );
};

export default CustomComponent;
