import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./Navi"
import Package from "../screens/Package";

const Stack = createStackNavigator();

function MainNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Navigation" component={Navigation} />
      <Stack.Screen name="Package" component={Package} />
    </Stack.Navigator>
  );
}

export default MainNavi;
