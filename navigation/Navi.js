import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import ServiceStack from "./ServiceStack";
import ActivityStack from "./ActivityStack";
import Text from "../fonts/Text";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "UberMedium",
          fontSize: 12,
          bottom: 7.5,
        },
        tabBarStyle: [{ height: 55 }, null],
      }}
    >
      <Tab.Screen
        name="HS"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SS"
        component={ServiceStack}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="nav-icon-grid" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AS"
        component={ActivityStack}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="receipt" size={18} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ACS"
        component={AccountStack}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
