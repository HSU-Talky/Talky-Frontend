import { View } from "react-native";
import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import userData from "../../datas/userDummy.json";
import EmergencyContact from "./components/EmergencyContact";

const UserSettingScreen = () => {
  const user = userData[0];
  const [name, setName] = useState(user.name);

  return (
    <View>
      {/* 유저 정보 연결 예정 */}
      <UserInfo
        name={name}
        onChange={setName}
        id={user.id}
        unique={user.unique}
      />
      {/* 보호자 이름 연결 예정 */}
      <EmergencyContact />
    </View>
  );
};

export default UserSettingScreen;
