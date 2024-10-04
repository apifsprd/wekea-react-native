import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
});

export default function Category() {
  return (
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
  );
}
