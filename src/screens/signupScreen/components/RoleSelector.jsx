import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getInputStyles } from "../../../utils/getInputStyles";

const roles = ["일반", "보호자"];

const RoleSelector = ({ selectedRole, onSelect }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { backgroundColor, iconColor } = getInputStyles(
    isFocused,
    selectedRole || ""
  );

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
        <Ionicons name="caret-down-sharp" size={16} color={iconColor} />
      </TouchableOpacity>

      {/* 🎯 드롭다운 모달 (absolute View로 구현) */}
      {modalVisible && (
        <View style={styles.dropdown}>
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
                  size={16}
                  color={isSelected ? "#FFD321" : "#FFFFFF"}
                />
              </Pressable>
            );
          })}
        </View>
      )}
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
    paddingTop: 6,
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
