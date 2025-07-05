import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 함수
  const handleLogin = () => {
    // 로그인 로직 구현 예정
    console.log("로그인 ", { id, password });
  };

  return (
    <View style={styles.container}>
      <SignInput
        placeholder="아이디를 입력해 주세요"
        value={id}
        onChangeText={setId}
      />
      <View style={{ height: 19.67 }} />
      <SignInput
        placeholder="비밀번호를 입력해 주세요"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ height: 46 }} />
      <SignButton
        title="로그인"
        disabled={!(id.length > 0 && password.length > 0)}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default LoginForm;
