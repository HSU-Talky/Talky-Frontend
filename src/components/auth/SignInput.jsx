import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getInputStyles } from "../../utils/getInputStyles";

const SignInput = ({ placeholder, secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 눈 아이콘 토글

  const { backgroundColor, iconColor } = getInputStyles(isFocused, text); // 배경색, 눈아이콘 색
  const isPasswordField = secureTextEntry; // 비밀번호 공개여부

  return (
    <View style={[styles.inputContainer, , { backgroundColor }]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#B1B1B1"
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={isPasswordField && !showPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* 눈 아이콘: 비밀번호 입력창에만 */}
      {isPasswordField && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={12.67}
            color={iconColor}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 242.67,
    height: 31.11,
    borderRadius: 16.67,
    justifyContent: "center",
    paddingHorizontal: 11.33,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 10.67,
    fontWeight: "400",
    color: "#000",
    padding: 0,
  },
  eyeIcon: {
    marginLeft: 12,
  },
});

export default SignInput;
