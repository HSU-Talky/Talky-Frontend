import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import DialogButton from "./DialogButton";
import { COLORS } from "../../styles/color";

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
              <DialogButton
                onPress={onCancel}
                text={cancelText}
                backgroundColor={COLORS.CANCLE_NORMAL}
                pressedColor={COLORS.CANCLE_CLICK}
                textWeight="400"
              />
            )}
            {confirmText && (
              <DialogButton
                onPress={onConfirm}
                text={confirmText}
                backgroundColor={COLORS.ERROR_NORMAL}
                pressedColor={COLORS.ERROR__CLICK}
                textWeight="600"
              />
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
    backgroundColor: COLORS.WHITE,
    borderRadius: 16.67,
    padding: 19,
    width: 273.33,
    height: 180.67,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16.67,
    elevation: 5,
    borderWidth: 2.67,
    borderColor: COLORS.MAIN_YELLOW2,
    gap: 26,
  },
  header: {
    alignItems: "center",
    width: 100,
  },
  title: {
    fontSize: 8,
    fontWeight: 400,
    color: COLORS.SUB_BLACK,
    backgroundColor: COLORS.MAIN_YELLOW2,
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
    color: COLORS.BLACK,
    marginBottom: 5.33,
  },
  subMessage: {
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.SUB_BLACK,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 33.33,
  },
});

export default Dialog;
