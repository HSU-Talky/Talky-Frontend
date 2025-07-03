import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const Dialog = ({
  visible = false,
  title = "타이틀",
  message = "메세지",
  subMessage = "서브메세지",
  cancelText,
  confirmText,
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <View style={styles.header}>
            {/* 즐겨찾기 문장 삭제 */}
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.content}>
            {/* 메인, 서브메세지 */}
            <Text style={styles.message}>{message}</Text>
            {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}
          </View>

          <View style={styles.buttonContainer}>
            {/* 버튼들 */}
            {cancelText && (
              <TouchableOpacity
                onPress={onCancel}
                style={[styles.button, styles.cancelButton]}
              >
                <Text style={styles.cancelButtonText}>{cancelText}</Text>
              </TouchableOpacity>
            )}
            {confirmText && (
              <TouchableOpacity
                onPress={onConfirm}
                style={[styles.button, styles.confirmButton]}
              >
                <Text style={styles.confirmButtonText}>{confirmText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "white",
    borderRadius: 16.67,
    padding: 19,
    width: 273.33,
    height: 180.67,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16.67,
    elevation: 5,
    borderWidth: 2.67,
    borderColor: "#FFEC9F",
    gap: 26,
  },
  header: {
    alignItems: "center",
    width: 100,
  },
  title: {
    fontSize: 8,
    fontWeight: 400,
    color: "#464646",
    backgroundColor: "#FFEC9F",
    paddingHorizontal: 6.67,
    paddingVertical: 3.33,
    borderRadius: 16.67,
  },
  content: {
    alignItems: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: 500,
    color: "#2B2B2B",
    marginBottom: 5.33,
  },
  subMessage: {
    fontSize: 12,
    fontWeight: 400,
    color: "#464646",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 33.33,
  },
  button: {
    width: 99.33,
    height: 34,
    borderRadius: 6.67,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#8B8B8B",
  },
  confirmButton: {
    backgroundColor: "#FF8860",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: 400,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: 600,
  },
});

export default Dialog;
