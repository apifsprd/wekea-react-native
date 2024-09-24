import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { Button, IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-reanimated-carousel";

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    // height: 40,
    borderColor: "gray",
    padding: 10,
    gap: 10,
    // marginHorizontal: 5,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: "#f5f5f5",
  },
});

const Index = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const dataCorousel = [
    { id: 1, imgUrl: "https://placehold.co/600x400/png" },
    { id: 2, imgUrl: "https://placehold.co/600x400/png" },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={16} />
          <TextInput placeholder="Mau cari apa?" />
        </View>
        <IconButton icon="menu" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Carousel
          loop={false}
          width={width - 15}
          height={200}
          autoPlay={false}
          data={dataCorousel}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => {}}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.imgUrl }}
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          )}
        />
      </View>
    </>
  );
};

export default Index;
