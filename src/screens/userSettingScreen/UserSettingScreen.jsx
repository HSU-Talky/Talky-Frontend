import { View } from "react-native";
import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import userData from "../../datas/userDummy.json";

const UserSettingScreen = () => {
  const user = userData[0];
  const [name, setName] = useState(user.name);

  return (
    <View>
      <UserInfo name={name} onChange={setName} id={user.id} />
    </View>
  );
};

export default UserSettingScreen;
