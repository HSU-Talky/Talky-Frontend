import { StyleSheet, TextInput, View } from "react-native";
import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { Toast } from "./Toast";
import { useInput } from "../../hooks/useInput";
import { COLORS } from "../../styles/color";
import * as Speech from "expo-speech";

export const TalkInput = () => {
  const {
    text,
    status,
    rightPressed,
    showToast,
    setShowToast,
    getPlaceholderColor,
    getInputBorderColor,
    onFocus,
    onBlur,
    onChangeText,
    onSubmit,
    handleRightPress,
    handleShowToast,
  } = useInput();

  const readDescriptions = () => {
    console.log("TTS 시작"); // 시작 로그

    Speech.speak(text, {
      language: "ko",
      pitch: 1.0, // 높낮이
      rate: 0.8, // 속도
      onError: (error) => {
        console.log("TTS 에러:", error); // 에러 로그
      },
    });
  };

  return (
    <View
      style={[
        styles.container,
        status === "focused" && styles.focusContainer,
        status === "typing" && styles.typingContainer,
        status === "submitted" && styles.submitContainer,
        rightPressed && styles.rightPressedContainer,
      ]}
    >
      <InputLeft status={status} onFavoriteToggle={handleShowToast} />
      <TextInput
        placeholder="표현하고 싶은 문장을 적어 봐!"
        placeholderTextColor={getPlaceholderColor()}
        style={[
          styles.input,
          { borderColor: getInputBorderColor() },
          rightPressed && styles.inputRightPressed,
        ]}
        value={text}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        blurOnSubmit={false}
      />
      <InputRight
        status={status}
        onPress={() => {
          readDescriptions();
        }}
      />
      {showToast && (
        <Toast message="즐겨찾기 완료!" onHide={() => setShowToast(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 334.667,
    height: 54,
    borderWidth: 1.667,
    borderColor: COLORS.MAIN_YELLOW3,
    borderRadius: 20,
    gap: 5,
    backgroundColor: "transparent",
  },

  focusContainer: {
    backgroundColor: "#FFEC9F33",
    borderColor: "transparent",
    opacity: 1,
  },

  typingContainer: {
    backgroundColor: COLORS.MAIN_YELLOW2,
  },

  submitContainer: {
    backgroundColor: "#FFE890",
  },

  rightPressedContainer: {
    backgroundColor: COLORS.MAIN_YELLOW3,
  },

  inputRightPressed: {
    backgroundColor: COLORS.WHITE,
  },

  input: {
    width: 243.333,
    height: 40.668,
    paddingLeft: 12,
    borderRadius: 33.333,
    borderWidth: 1.668,
    backgroundColor: "transparent",
  },
});
