import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { LocationInfo } from "./components/LocationInfo";
import { GuardianInfo } from "./components/GuardianInfo";

const GuardianSettingScreen = () => {
  return (
    <View style = { styles.container }>
      <LocationInfo />
      <GuardianInfo />
      <TouchableOpacity style = { styles.logoutButton }>
        <Text style = { styles.logoutText }>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuardianSettingScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFEF6",
    paddingTop: 45,
    gap: 24
  },

  logoutButton: {
    width: 85,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEC9F",
    borderRadius: 33.33
  },

  logoutText: {
    color: "#464646",
    fontSize: 12,
    fontWeight: 400
  }
})