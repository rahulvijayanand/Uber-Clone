import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Navigation from "./Navi";
import Package from "../screens/Package";
import Reserve from "../screens/Reserve";
import Auto from "../screens/Auto";
import Safety from "../screens/Safety";
import UberXL from "../screens/UberXL";
import Moto from "../screens/Moto";
import Rental from "../screens/Rental";
import Intercity from "../screens/Intercity";

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
      <Stack.Screen
        name="Auto"
        component={Auto}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <Stack.Screen
        name="Safety"
        component={Safety}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <Stack.Screen
        name="UberXL"
        component={UberXL}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <Stack.Screen
        name="Moto"
        component={Moto}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <Stack.Screen name="Rental" component={Rental} />
      <Stack.Screen name="Intercity" component={Intercity} />
    </Stack.Navigator>
  );
}

export default MainNavi;
