import { View, StyleSheet } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function DiscoverScreen() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{ position: "absolute", top: 100, left: 50 }} />
    </View>
  );
}
