import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Button, Card, IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-reanimated-carousel";

import Sofa from "../../../../assets/sofa.jpg";

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    gap: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    padding: 10,
    gap: 10,
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
    backgroundColor: "white",
  },
  imageCarousel: { width: "100%", height: "100%", borderRadius: 10 },
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
  cardContainer: { width: 150, overflow: "hidden", marginRight: 15 },
  cardCoverImg: { borderRadius: 0, height: 150 },
});

const Index = ({ navigation }) => {
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
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={16} />
          <TextInput placeholder="Mau cari apa?" />
        </View>
        <IconButton icon="menu" />
      </View>

      {/* Carousel */}
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

      {/* Category */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(5).keys()).map((item) => (
          <IconButton
            key={item}
            icon={({ color, size }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="home-outline" size={size} color={color} />
                <Text>Home</Text>
              </View>
            )}
            style={styles.iconButton}
          />
        ))}
      </ScrollView>

      {/* Product */}
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Popular</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingVertical: 10 }}
      >
        {Array.from(Array(5)).map((item) => (
          <Card style={styles.cardContainer}>
            <Card.Cover source={Sofa} style={styles.cardCoverImg} />
            <Card.Content style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Sofa</Text>
              <Text>Rp. 100.000</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default Index;
