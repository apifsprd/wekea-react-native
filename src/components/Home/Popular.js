import { Text, ScrollView } from "react-native";
import React from "react";

import CardProduct from "../Global/CardProduct";

export default function Popular() {
  return (
    <>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {Array.from(Array(5).keys()).map((item, index) => (
          <CardProduct />
        ))}
      </ScrollView>
    </>
  );
}
