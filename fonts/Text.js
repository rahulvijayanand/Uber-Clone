import { useFonts } from "expo-font";
import { Text as RNText } from "react-native";

const Text = ({ style, ...rest }) => {
  const [fontsLoaded] = useFonts({
    UberRegular: require("../fonts/UberMove-Regular.ttf"),
  });

  return <RNText style={[{ fontFamily: "UberRegular" }, style]} {...rest} />;
};

export default Text;
