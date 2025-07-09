import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CurrentTime from "./components/CurrentTime";
import CurrentLocation from "./components/CurrentLocation";
import { TalkInput } from "../../components/input/TalkInput";
import { AfterMainBox } from "./components/AfterMainBox";
import { StarMenuBox } from "./components/StarMenuBox";
import { AfterLocationBox } from "./components/AfterLocationBox";

const TalkTalkScreen = () => {
  return (
    <ScrollView>
      <View style = { styles.container }>
        <View style = { styles.current }>
          <CurrentTime />
          <CurrentLocation />
        </View>
        <TalkInput />
        <AfterLocationBox />
        <AfterMainBox />
        <StarMenuBox />
      </View>
    </ScrollView>
  );
};

export default TalkTalkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 40, 
    backgroundColor: "#FFFEF6",
    alignItems: "center", 
    gap: 18
  },

  current: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 21
  }
})