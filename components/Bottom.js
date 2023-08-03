import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import TextM from "../fonts/TextMedium";
import { Divider } from "react-native-paper";

const Show = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("All");
  const [selectedOption2, setSelectedOption2] = useState("Personal");

  const toggleBottomNavigationView = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleBottomNavigationView}
        activeOpacity={0.5}
        style={{
          alignSelf: "center",
          height: 32,
          width: 32,
          borderRadius: 20,
          backgroundColor: "#eee",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/filter.jpg")}
          style={{
            resizeMode: "contain",
            height: 15,
            width: 15,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "43.5%",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                height: "17.5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextM style={{ fontSize: 18 }}>Filter by...</TextM>
            </View>
            <Divider
              style={{
                backgroundColor: "#e5e5e5",
                width: "100%",
                padding: 1.25,
              }}
            />

            <TextM style={{ marginLeft: 15, marginTop: 30, fontSize: 18 }}>
              Profiles
            </TextM>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption2 === "Personal" && styles.activeOptionButton,
                  { marginLeft: 15 },
                ]}
                onPress={() => handleOptionSelect2("Personal")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption2 === "Personal" && styles.activeOptionText,
                  ]}
                >
                  Personal
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption2 === "Business" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect2("Business")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption2 === "Business" && styles.activeOptionText,
                  ]}
                >
                  Rides
                </TextM>
              </TouchableOpacity>
            </View>

            <TextM style={{ marginLeft: 15, marginTop: 30, fontSize: 18 }}>
              Services
            </TextM>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption1 === "All" && styles.activeOptionButton,
                  { marginLeft: 15 },
                ]}
                onPress={() => handleOptionSelect1("All")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption1 === "All" && styles.activeOptionText,
                  ]}
                >
                  All
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption1 === "Rides" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect1("Rides")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption1 === "Rides" && styles.activeOptionText,
                  ]}
                >
                  Rides
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption1 === "Eats" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect1("Eats")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption1 === "Eats" && styles.activeOptionText,
                  ]}
                >
                  Eats
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption1 === "2-Wheels" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect1("2-Wheels")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption1 === "2-Wheels" && styles.activeOptionText,
                  ]}
                >
                  2-Wheels
                </TextM>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                backgroundColor: "#000",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 15,
                margin: 15,
                borderRadius: 7.5,
                marginTop: 30,
              }}
              onPress={toggleBottomNavigationView}
            >
              <TextM style={{ color: "#fff", fontSize: 18 }}>Apply</TextM>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = {
  optionButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 13,
    backgroundColor: "#eee",
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  activeOptionButton: {
    backgroundColor: "#000",
  },
  optionText: {
    color: "#000",
    fontSize: 15,
  },
  activeOptionText: {
    color: "#fff",
  },
};

export default React.memo(Show);
