import { Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import React from "react";

import Ads from "../../../assets/2150040375.jpg";

const styles = StyleSheet.create({
  pressableComponent: { flex: 1, height: 100, margin: 5 },
  imagePressable: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: "gray",
  },
});

export default function AdsPromotion() {
  return (
    <>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Promo Minggu Ini</Text>
      <FlatList
        style={{ marginTop: 5 }}
        numColumns={2}
        data={Array(4)}
        renderItem={({}) => (
          <Pressable style={styles.pressableComponent}>
            <Image source={Ads} style={styles.imagePressable} />
          </Pressable>
        )}
      />
    </>
  );
}
