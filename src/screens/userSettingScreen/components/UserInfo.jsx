import React from "react";
import SettingBox from "../../../components/setting/SettingBox";
import NameIdGroup from "../../../components/setting/NameIdGroup";

const UserInfo = () => {
  return (
    <SettingBox height={216} title="사용자 정보">
      {/* 이름, 아이디 */}
      <NameIdGroup />

      {/* 고유번호 */}

      {/* 소개글 */}
    </SettingBox>
  );
};

export default UserInfo;
