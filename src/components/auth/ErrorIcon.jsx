import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/color";

const ErrorIcon = () => (
  <Feather
    name="alert-circle"
    size={23.33}
    color={COLORS.ERROR_NORMAL}
    style={styles.icon}
  />
);

const styles = StyleSheet.create({
  icon: {
    marginLeft: 3.33,
  },
});

export default ErrorIcon;
