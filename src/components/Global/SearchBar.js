import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
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
});

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Ionicons name="search" size={16} />
        <TextInput placeholder="Mau cari apa?" />
      </View>
      <IconButton icon="menu" />
    </View>
  );
}
