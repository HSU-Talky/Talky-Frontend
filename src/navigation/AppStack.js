import React from "react";
import UserTabNavigator from "./UserTabBar";
import GuardianTabNavigator from "./GuardianTabBar";

export default function AppStack({ userType }) {
  return userType === "guardian" ? (
    <GuardianTabNavigator />
  ) : (
    <UserTabNavigator />
  );
}
