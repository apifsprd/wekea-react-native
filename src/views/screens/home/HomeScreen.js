import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import SearchBar from "../../../components/Global/SearchBar";
import CustomCarousel from "../../../components/Home/CustomCarousel";
import Category from "../../../components/Home/Category";
import AdsPromotion from "../../../components/Home/AdsPromotion";
import Popular from "../../../components/Home/Popular";

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    gap: 10,
  },
});

const Index = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <SearchBar />
        <CustomCarousel />
        <Category />
        <AdsPromotion />
        <Popular />
      </View>

      <View style={{ marginTop: "20%" }}></View>
    </ScrollView>
  );
};

export default Index;
