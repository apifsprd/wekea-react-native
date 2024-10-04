import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

import Sofa from "../../../assets/sofa.jpg";

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    overflow: "hidden",
    marginRight: 15,
  },
  cardCoverImg: { borderRadius: 0, height: 150 },
});

export default function CardProduct() {
  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={Sofa} style={styles.cardCoverImg} />
      <Card.Content style={{ padding: 15 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Sofa</Text>
        <Text>Rp. 100.000</Text>
      </Card.Content>
    </Card>
  );
}
