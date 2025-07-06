import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RoleSelector from "./RoleSelector";
import SignInput from "../../../components/auth/SignInput";
import SignButton from "../../../components/auth/SignButton";
import { COLORS } from "../../../styles/color";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);

  // 회원가입 함수
  const handleLogin = () => {
    // 회원가입 로직 구현 예정
    console.log("회원가입 ", { name, id, password, role });
  };

  return (
    <View>
      <Text style={styles.text}>이름</Text>
      <SignInput
        placeholder="이름을 입력해 주세요"
        value={name}
        onChangeText={setName}
      />
      <View style={{ height: 12.33 }} />
      <Text style={styles.text}>아이디</Text>
      <SignInput
        placeholder="아이디를 입력해 주세요"
        value={id}
        onChangeText={setId}
        showCheckButton={true}
        checkButtonDisabled={false}
      />
      <View style={{ height: 12.33 }} />
      <Text style={styles.text}>비밀번호</Text>
      <SignInput
        placeholder="비밀번호를 입력해 주세요"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ height: 22.33 }} />
      <Text style={styles.text}>역할</Text>
      <RoleSelector selectedRole={role} onSelect={setRole} />
      <View style={{ height: 92.67 }} />
      <SignButton
        title="회원가입"
        disabled={
          !(name.length > 0 && id.length > 0 && password.length > 0 && role)
        }
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 9.33,
    fontWeight: 500,
    color: COLORS.SUB_BLACK,
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default SignupForm;
