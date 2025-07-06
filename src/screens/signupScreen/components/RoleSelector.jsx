import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getInputStyles } from "../../../utils/getInputStyles";

const roles = ["일반", "보호자"]; // 역할 목록
const DROPDOWN_HEIGHT = 62.67; // dropdown 높이

const RoleSelector = ({ selectedRole, onSelect }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { backgroundColor, iconColor } = getInputStyles(
    isFocused,
    selectedRole || ""
  );

  // 애니메이션 초기값 0
  const dropdownHeight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(dropdownHeight, {
      toValue: modalVisible ? DROPDOWN_HEIGHT : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (!modalVisible) setIsFocused(false);
    });
  }, [modalVisible, dropdownHeight]);

  const handleSelect = (role) => {
    onSelect(role);
    setModalVisible(false);
    setIsFocused(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.selectorContainer, { backgroundColor }]}
        onPress={() => {
          setIsFocused(true);
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.selectorText}>
          {selectedRole ? selectedRole : "역할을 선택해 주세요"}
        </Text>
        <Ionicons name="caret-down-sharp" size={12.67} color={iconColor} />
      </TouchableOpacity>

      {/*  역할선택 항목 dropdown */}
      <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
        {roles.map((role) => {
          const isSelected = selectedRole === role;
          return (
            <Pressable
              key={role}
              style={[styles.modalItem, isSelected && styles.selectedItem]}
              onPress={() => handleSelect(role)}
            >
              <Text style={styles.modalText}>{role}</Text>
              <Ionicons
                name={isSelected ? "radio-button-on" : "radio-button-off"}
                size={12.67}
                color={isSelected ? "#FFD321" : "#FFFFFF"}
              />
            </Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    alignItems: "center",
  },
  selectorContainer: {
    width: 242.67,
    height: 31.33,
    borderRadius: 16.67,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 2, // dropdown보다 위로
  },
  selectorText: {
    fontSize: 11.33,
    fontWeight: "500",
    color: "#2B2B2B",
  },
  dropdown: {
    position: "absolute",
    overflow: "hidden",
    top: 29.33,
    width: 232.67,
    height: 62.67,
    backgroundColor: "#FFF3C7",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3.33,
    borderBottomRightRadius: 3.33,
    justifyContent: "center",
    zIndex: 1,
  },
  modalItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 6.33,
  },
  selectedItem: {
    backgroundColor: "#FFD32180",
  },
  modalText: {
    fontSize: 11.33,
    fontWeight: "500",
    color: "#2B2B2B",
  },
});

export default RoleSelector;
