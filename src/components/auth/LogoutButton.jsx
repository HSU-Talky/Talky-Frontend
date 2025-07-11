import React from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const LogoutButton = () => {
  const handleLogout = () => {
    // 로그아웃 로직 구현 예정
    Alert.alert("로그아웃");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>로그아웃</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 28,
    backgroundColor: "#FFEC9F",
    borderRadius: 33.33,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9F9F9F",
  },
});

export default LogoutButton;
