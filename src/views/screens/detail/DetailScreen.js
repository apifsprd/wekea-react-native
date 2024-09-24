import { View, Text, Button } from "react-native";
import React from "react";

const DetailScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
