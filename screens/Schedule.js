import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Text from "../fonts/Text";
import TextB from "../fonts/TextBold";
import TextM from "../fonts/TextMedium";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import CustomComponent from "../components/ReserveComp";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Schedule = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (time) => {
    setShowTimePicker(false);
    if (time) {
      const selectedTime = new Date(selectedDate);
      selectedTime.setHours(time.getHours());
      selectedTime.setMinutes(time.getMinutes());
      setSelectedDate(selectedTime);
    }
  };

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const roundedTime = new Date(date.getTime() + 70 * 60000);
    const minutes = roundedTime.getMinutes();
    const roundedMinutes = Math.round(minutes / 10) * 10;
    roundedTime.setMinutes(roundedMinutes);

    return roundedTime.toLocaleTimeString("en-US", options);
  };

  const isDateBlocked = (date) => {
    const today = new Date();
    return date < today;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
        style={styles.close}
      >
        <Ionicons name="ios-close-sharp" size={30} color="#000" />
      </TouchableOpacity>

      <TextB
        style={{
          fontSize: 36,
          textAlign: "center",
          marginTop: 10,
          width: 330,
          alignSelf: "center",
        }}
      >
        When do you want to be picked up?
      </TextB>

      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={{ marginTop: 60, alignItems: "center", marginBottom: 30 }}
      >
        <TextM style={{ fontSize: 16 }}>{formatDate(selectedDate)}</TextM>
      </TouchableOpacity>

      <Divider
        style={{
          backgroundColor: "#e9e9e9",
          width: "85%",
          padding: 0.6,
          alignSelf: "center",
        }}
      />

      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        style={{ marginTop: 25, alignItems: "center" }}
      >
        <TextM style={{ fontSize: 16 }}>{formatTime(selectedDate)}</TextM>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleDateChange}
        onCancel={() => setShowDatePicker(false)}
        minimumDate={new Date()}
        isBlockedDate={isDateBlocked}
      />

      <DateTimePickerModal
        isVisible={showTimePicker}
        mode="time"
        onConfirm={handleTimeChange}
        onCancel={() => setShowTimePicker(false)}
      />

      <View style={{ marginLeft: 5, marginTop: 20 }}>
        <CustomComponent
          imageSource={require("../assets/8-l.jpeg")}
          text="Choose your exact pickup time up to 90 days in advance"
          showDivider
        />
        <CustomComponent
          imageSource={require("../assets/9-l.jpeg")}
          text="Extra wait time included to meet your ride"
          showDivider
        />
        <CustomComponent
          imageSource={require("../assets/10-l.jpeg")}
          text="Cancel at no charge up to 60 minutes in advance"
        />
      </View>

      <TouchableOpacity style={{ marginTop: 40, marginLeft: 10 }}>
        <TextM style={{ fontSize: 16, textDecorationLine: "underline" }}>
          See terms
        </TextM>
      </TouchableOpacity>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.sendButton}>
          <TextM style={styles.buttonText}>Set pickup time</TextM>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  sendButton: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 7.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
