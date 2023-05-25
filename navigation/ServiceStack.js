import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Services from "../screens/Services";

const Stack = createStackNavigator();

function ServiceStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
  );
}

export default ServiceStack;
