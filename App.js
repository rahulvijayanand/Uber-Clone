import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavi from "./navigation/MainNavi";

const App = () => {
  return (
    <NavigationContainer>
      <MainNavi />
    </NavigationContainer>
  );
};

export default App;
