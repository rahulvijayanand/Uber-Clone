import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const TextB = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    UberBold: require("../fonts/UberMoveBold.otf"),
  });

  return <RNText style={[{ fontFamily: "UberBold" }, style]} {...rest} />;
};

export default TextB;
