import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./Navi"
import Package from "../screens/Package";
import Reserve from "../screens/Reserve";

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
      <Stack.Screen name="Reserve" component={Reserve} />
    </Stack.Navigator>
  );
}

export default MainNavi;
