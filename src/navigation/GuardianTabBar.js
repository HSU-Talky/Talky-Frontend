import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/mapScreen/MapScreen";
import StatisticsScreen from "../screens/statisticsScreen/StatisticsScreen";
import GuardianSettingScreen from "../screens/guardianSettingScreen/GuardianSettingScreen";

import MAP_ICON from "../assets/tabbar/practice.png"; //변경예정
import STATISTICS_ICON from "../assets/tabbar/talktalk.png"; //변경예정
import SETTING_ICON from "../assets/tabbar/setting.png";

const Tab = createBottomTabNavigator();

const GuardianTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Statistics"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, // 아이콘만
        tabBarStyle: {
          height: 89,
          paddingTop: 10,
          backgroundColor: "#FFEC9F",
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Map") {
            icon = MAP_ICON;
          } else if (route.name === "Statistics") {
            icon = STATISTICS_ICON;
          } else if (route.name === "GuardianSetting") {
            icon = SETTING_ICON;
          }

          return (
            <View
              style={{
                backgroundColor: focused ? "#FFFFFFB3" : "transparent",
                padding: 2.6,
                borderRadius: 10,
              }}
            >
              <Image
                source={icon}
                style={{
                  width: 46,
                  height: 46,
                  resizeMode: "contain",
                }}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="GuardianSetting" component={GuardianSettingScreen} />
    </Tab.Navigator>
  );
};

export default GuardianTabNavigator;
