import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const DialogButton = ({
  onPress,
  text,
  backgroundColor = "#ECECEC",
  pressedColor = "#8B8B8B",
  textColor = "black",
  pressedTextColor = "white",
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
