import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import TextM from "../fonts/TextMedium";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const TB1 = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleBottomNavigationView = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleBottomNavigationView}
        activeOpacity={0.5}
        style={{

          height: 45,
          width: 45,
          borderRadius: 30,
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="add" size={40} color="white" />
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
            height: "32.5%",
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
                height: "25%",
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
              Services
            </TextM>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption === "All" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect("All")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption === "All" && styles.activeOptionText,
                  ]}
                >
                  All
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption === "Rides" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect("Rides")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption === "Rides" && styles.activeOptionText,
                  ]}
                >
                  Rides
                </TextM>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.optionButton,
                  selectedOption === "Eats" && styles.activeOptionButton,
                ]}
                onPress={() => handleOptionSelect("Eats")}
              >
                <TextM
                  style={[
                    styles.optionText,
                    selectedOption === "Eats" && styles.activeOptionText,
                  ]}
                >
                  Eats
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
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    marginLeft: 15,
    borderRadius: 20,
    marginTop: 5,
  },
  activeOptionButton: {
    backgroundColor: "#000",
  },
  optionText: {
    color: "#000",
    fontSize: 16,
  },
  activeOptionText: {
    color: "#fff",
  },
};

export default React.memo(TB1);
