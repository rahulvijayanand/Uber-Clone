import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const TextM = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    UberMedium: require("../fonts/UberMoveMedium.otf"),
  });

  return <RNText style={[{ fontFamily: "UberMedium" }, style]} {...rest} />;
};

export default TextM;
