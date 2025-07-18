import React from "react";
import { View, StyleSheet } from "react-native";
import SettingBox from "../../../components/setting/SettingBox";
import NameIdGroup from "../../../components/setting/NameIdGroup";
import ReadOnlyField from "../../../components/setting/ReadOnlyField";
import EditableField from "../../../components/setting/EditableField";

const UserInfo = ({ name, id, unique }) => {
  return (
    <SettingBox height={216} title="사용자 정보">
      {/* 이름, 아이디 */}
      <View style={styles.item}>
        <NameIdGroup name={name} id={id} />
      </View>
      {/* 고유번호 */}
      <View style={styles.item}>
        <ReadOnlyField
          label="고유번호 (보호자 계정에 입력해 주세요)"
          width={267}
          value={unique}
        />
      </View>
      {/* 소개글 */}
      <View style={styles.item}>
        <EditableField
          label="소개글"
          width={267}
          value="저는 언어 표현이 어려운 상황입니다. 양해 부탁드립니다." // 받아올 예정
          placeholder="저는 언어 표현이 어려운 상황입니다. 양해 부탁드립니다."
        />
      </View>
    </SettingBox>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default UserInfo;
