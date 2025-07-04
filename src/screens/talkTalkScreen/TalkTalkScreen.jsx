import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CurrentTime from "./components/CurrentTime";
import CurrentLocation from "./components/CurrentLocation";
import { TalkInput } from "../../components/input/TalkInput";
import { RecomBox } from "./components/RecomBox";
import { Menu } from "./components/Menu";

const TalkTalkScreen = () => {
  return (
    <View style = { styles.container }>
      <View style = { styles.current }>
        <CurrentTime />
        <CurrentLocation />
      </View>
      <TalkInput />
      <RecomBox />
      <Menu />
    </View>
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