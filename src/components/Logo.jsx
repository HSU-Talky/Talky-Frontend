// 로고
import React from "react";
import { View, Image } from "react-native";
import LOGO from "../assets/images/talktalk-logo.png";

const Logo = ({ width = 93.67, height = 26, top = 0 }) => {
  return (
    <View style={{ paddingTop: top }}>
      <Image
        source={LOGO}
        style={{
          width,
          height,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default Logo;
