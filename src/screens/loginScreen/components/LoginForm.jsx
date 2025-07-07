import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";
import { COLORS } from "../../../styles/color";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 로그인 함수
  const handleLogin = () => {
    // 로그인 로직 구현 예정
    if (id === "test1234" && password === "test1234") {
      console.log("로그인 ", { id, password });
      setError("");
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다");
    }
  };

  return (
    <View>
      <SignInput
        placeholder="아이디를 입력해 주세요"
        value={id}
        onChangeText={(text) => {
          setId(text);
          if (error) setError("");
        }}
      />
      <View style={{ height: 19.67 }} />
      <SignInput
        placeholder="비밀번호를 입력해 주세요"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (error) setError("");
        }}
      />
      <Text style={styles.error}>{error}</Text>

      <View style={{ height: 35 }} />
      <SignButton
        title="로그인"
        disabled={!(id.length > 0 && password.length > 0)}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 7.33,
    fontWeight: "400",
    color: COLORS.ERROR_MESSAGE,
    textAlign: "center",
    marginTop: 3,
  },
});

export default LoginForm;
