import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextB from "../fonts/TextBold";
import TextM from "../fonts/TextMedium";
import Text from "../fonts/Text";

const Carousel = ({ images, titles, descriptions, staticText }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const windowWidth = Dimensions.get("window").width - 33;

  useEffect(() => {
    scrollViewRef.current.scrollTo({ x: activeIndex * windowWidth });
  }, [activeIndex]);

  const handleDotPress = (index) => {
    setActiveIndex(index);
  };

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / windowWidth);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={200}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <View
              style={{
                borderWidth: 1.5,
                borderRadius: 12,
                borderColor: "#e5e5e5",
              }}
            >
              <Image
                source={image}
                style={[styles.image, { width: windowWidth }]}
              />
              <View style={styles.textContainer}>
                <TextB style={styles.title}>{titles[index]}</TextB>
                <Text style={styles.description}>{descriptions[index]}</Text>
                <TextM style={styles.staticText}>{staticText}</TextM>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDotPress(index)}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  slide: {},
  image: {
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "contain",
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 35,
  },
  title: {
    fontSize: 21,
    color: "black",
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    width: 290,
    color: "black",
    marginTop: 15,
  },
  staticText: {
    fontSize: 14,
    color: "black",
    marginTop: 15,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  activeDot: {
    backgroundColor: "black",
  },
});

export default Carousel;
