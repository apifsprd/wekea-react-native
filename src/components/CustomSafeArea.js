/* eslint-disable react/prop-types */
import { SafeAreaView } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import React from "react";

export function CustomSafeArea({ children }) {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyle}>{children}</SafeAreaView>
  );
}
