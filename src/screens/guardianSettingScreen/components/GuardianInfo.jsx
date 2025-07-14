import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import SettingBox from "../../../components/setting/SettingBox"
import NameIdGroup from "../../../components/setting/NameIdGroup"
import EditableField from "../../../components/setting/EditableField"
import { Toast } from "../../../components/input/Toast"

import ACCOUNT from "../../../assets/images/guardian-setting/connetAccount.png"
import { useState } from "react"
import { useDialogOpen } from "../../../hooks/useDialogOpen"
import Dialog from "../../../components/dialog/Dialog"

export const GuardianInfo = () => {
    const { 
        dialogVisible, 
        openDialog, 
        handleRealDelete, 
        handleCancel 
    } = useDialogOpen();

    const [isRegistered, setIsRegistered] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleRegister = () => {
        if (!isRegistered) {
            setIsRegistered(true);        
            setShowToast(true);           
        } else {
            openDialog();
        }
    };

    const handleDeleteConfirm = () => {
        setIsRegistered(false);      
        handleRealDelete();         
    };
    
    return (
        <SettingBox height = { 216 } title = "사용자 정보" bgColor = "#FFF3C7">
            <View style = { styles.content }>
                <NameIdGroup />
                <View style = { styles.accountContent }>
                    <View style = { styles.title }>
                        <Image source = { ACCOUNT } style = { styles.accountImg }/>
                        <Text style = { styles.mainText }>연결 계정</Text>
                        <Text style = { styles.subText }>
                            (일반 계정에 있는 고유 번호를 입력해 주세요)
                        </Text>
                    </View>
                    <View style = { styles.input }>
                        <TextInput 
                            style = { styles.inputBox }
                            placeholder = "일반 계정에 있는 고유 번호를 입력해 주세요"
                            placeholderTextColor = { "#C2C2C2" }
                        />
                        <TouchableOpacity 
                            style = {[ 
                                styles.registerBox,
                                isRegistered ? styles.deleteBox : styles.registerBox
                            ]}
                            onPress = { handleRegister }
                            activeOpacity = { 0.5 }
                        >
                            <Text style = {[ 
                                styles.registerText,
                                isRegistered ? styles.deleteText : styles.registerText
                            ]}>
                                { isRegistered ? "삭제" : "등록" }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style = { styles.plusBox }>
                    <Text style = { styles.plus }>+ 연결 계정 추가</Text>
                </TouchableOpacity>

                { showToast && (
                    <Toast
                        message = "연결 계정 등록 완료!"
                        onHide = { () => setShowToast(false) }
                    />
                )}

                <Dialog
                    visible = { dialogVisible }
                    title = "연결 계정 삭제"
                    message = "연결 계정을 삭제하시겠습니까?"
                    subMessage = "서비스 이용을 위해 연결 계정을 등록해 주세요."
                    cancelText = "취소"
                    confirmText = "삭제하기"
                    onCancel = { handleCancel }
                    onConfirm = { handleDeleteConfirm }
                />
            </View>
        </SettingBox> 
            )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },

    accountContent: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        gap: 4.66
    },

    accountImg: {
        width: 27.34,
        height: 28,
        resizeMode: "contain"
    },

    mainText: {
        color: "#2B2B2B",
        fontSize: 12,
        fontWeight: 500
    },

    subText: {
        color: "#464646",
        fontSize: 10,
        fontWeight: 400
    },

    input: {
        display: "flex",
        flexDirection: "row",
        gap: 7,
    },

    inputBox: {
        height: 20,
        backgroundColor: "#FFFEF6",
        borderRadius: 20,
        fontSize: 12,
        paddingVertical: 1,
        paddingHorizontal: 12,
    },

    registerBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 39,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#FFD321"
    },

    deleteBox: {
        backgroundColor: "#9F9F9F"
    },

    registerText: {
        color: "#9F9F9F",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 15
    },

    deleteText: {
        color: "#FFFFFF"
    },

    plusBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 102,
        height: 20,
        backgroundColor: "#FFEC9F",
        borderRadius: 10,
        borderColor: "#FFD321",
        borderWidth: 1,
        marginTop: 18
    },

    plus: {
        color: "#2B2B2B",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 15
    }
})