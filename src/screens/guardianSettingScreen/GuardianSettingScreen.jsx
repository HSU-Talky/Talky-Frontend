import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from "react-native";
import { LocationInfo } from "./components/LocationInfo";
import { GuardianInfo } from "./components/GuardianInfo";
import LogoutButton from "../../components/auth/LogoutButton";

const GuardianSettingScreen = () => {
  return (
    <ScrollView>
      <View style = { styles.container }>
        <LocationInfo />
        <GuardianInfo />
        <LogoutButton />
      </View>
    </ScrollView>
    
  );
};

export default GuardianSettingScreen;

const styles = StyleSheet.create({
  container: {
    height: 780,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFEF6",
    paddingTop: 45,
    gap: 24
  },

  logoutButton: {
    width: 85,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEC9F",
    borderRadius: 33.33
  },

  logoutText: {
    color: "#464646",
    fontSize: 12,
    fontWeight: "400"
  }
})