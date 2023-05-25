import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const TextL = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    UberLight: require("../fonts/UberMove-Light.ttf"),
  });

  return <RNText style={[{ fontFamily: "UberLight" }, style]} {...rest} />;
};

export default TextL;
