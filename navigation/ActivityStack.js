import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Activity from "../screens/Activity";

const Stack = createStackNavigator();

function ActivityStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
}

export default ActivityStack;
