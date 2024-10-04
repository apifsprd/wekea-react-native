import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import React from "react";

import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  imageCarousel: { width: "100%", height: "100%", borderRadius: 10 },
});

export default function CustomCarousel() {
  const { width } = useWindowDimensions();
  const dataCorousel = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1567016507665-356928ac6679?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={{ height: 200, alignItems: "center" }}>
      <Carousel
        loop={false}
        width={width - 15}
        height={200}
        autoPlay={false}
        data={dataCorousel}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {}}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imgUrl }} style={styles.imageCarousel} />
        )}
      />
    </View>
  );
}
