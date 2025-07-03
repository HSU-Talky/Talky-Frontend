import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/color";

const DialogButton = ({
  onPress,
  text,
  backgroundColor = COLORS.CANCLE_NORMAL,
  pressedColor = COLORS.CANCLE_CLICK,
  textColor = COLORS.BLACK,
  pressedTextColor = COLORS.WHITE,
  textWeight = "400",
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? pressedColor : backgroundColor },
        style, // 외부에서 전달된 스타일
      ]}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.buttonText,
            {
              color: pressed ? pressedTextColor : textColor,
              fontWeight: textWeight,
            },
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 99.33,
    height: 34,
    borderRadius: 6.67,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
  },
});

export default DialogButton;
