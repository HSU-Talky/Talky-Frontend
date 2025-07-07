import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RecomButton } from "../../talkTalkScreen/components/RecomButton"
import { BlurView } from "expo-blur";
import { useState } from "react";

import CLOSE from "../../../assets/images/talktalk/close.png";
import DELETE from "../../../assets/images/talktalk/delete.png";
import DELETED from "../../../assets/images/talktalk/deleted.png";

import { SentenceRow } from "./SentenceRow";
import Dialog from "../../../components/dialog/Dialog";

export const SentenceModal = ({ visible, onClose }) => {
    const [deleted, setDeleted] = useState([]); // 삭제 문장 인덱스 저장
    const [dialogVisible, setDialogVisible] = useState(false);
    const [targetIndex, setTargetIndex] = useState(null);
    const [pendingDeleteIndex, setPendingDeleteIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [targetSentence, setTargetSentence] = useState("");

    const sentences = [
        "문장 1 문장 1 문장 1 문장 1 문장 1 문장 1 문장 1 문장 1",
        "문장 2 문장 2 문장 2 문장 2 문장 2 문장 2 문장 2 문장 2",
        "문장 3 문장 3 문장 3 문장 3 문장 3 문장 3 문장 3 문장 3",
        "문장 4 문장 4 문장 4 문장 4 문장 4 문장 4 문장 4 문장 4",
        "문장 5 문장 5 문장 5 문장 5 문장 5 문장 5 문장 5 문장 5",
        "문장 6 문장 6 문장 6 문장 6 문장 6 문장 6 문장 6 문장 6",
        "문장 7 문장 7 문장 7 문장 7 문장 7 문장 7 문장 7 문장 7",
        "문장 8 문장 8 문장 8 문장 8 문장 8 문장 8 문장 8 문장 8",
        "문장 9 문장 9 문장 9 문장 9 문장 9 문장 9 문장 9 문장 9",
        "문장 10 문장 10 문장 10 문장 10 문장 10 문장 10 문장 10"
    ];

    const openDialog = (index) => {
        setPendingDeleteIndex(index);
        setTargetIndex(index);
        setTargetSentence(sentences[index]);
        setDialogVisible(true);
    }

    const handleRealDelete = () => {
        if (targetIndex !== null && !deleted.includes(targetIndex)) setDeleted([...deleted, targetIndex]);

        setDialogVisible(false);
        setTargetIndex(null);
    }

    const handleCancel = () => {
        setDialogVisible(false);
        setTargetIndex(null);
        setPendingDeleteIndex(null);
    }

    const truncate = (text, max = 20) => {
        return text.length > max ? text.slice(0, max) + "..." : text;
    }

    // const handleDelete = (index) => { // 문장 삭제
    //     if (!deleted.includes(index)) setDeleted([...deleted, index]);
    // }

    return (
        <Modal
            visible = { visible } 
            transparent
        >
            <View style = { modalStyles.overlay }>
                <BlurView
                    style = { modalStyles.backgroundBlur }
                    tint = "light"
                    intensity = { 100 }
                />
                <View style = { modalStyles.modalContainer }>
                    <View style = { modalStyles.content }>
                        <View style = { modalStyles.titleBox }>
                            <Text style = { modalStyles.titleText }>즐겨찾기 문장들</Text>
                        </View>
                        <TouchableOpacity onPress = { onClose }>
                            <Image 
                                source = { CLOSE }
                                style = { modalStyles.closeButton } 
                            />
                        </TouchableOpacity>
                        
                    </View>
                    <View style = { modalStyles.sentence }>
                        { sentences.map((sentence, index) => {
                            if (deleted.includes(index)) return null;
                            return ( 
                                <SentenceRow
                                    key = { index }
                                    index = { index }
                                    text = { sentences[index] }
                                    deleted = { deleted }
                                    onDelete = { openDialog }
                                    isPending = { index === pendingDeleteIndex }
                                />
                            );
                        })}
                    </View>
                </View>

                <Dialog 
                    visible = { dialogVisible }
                    title = "즐겨찾기 문장 삭제"
                    message = { `[${ truncate(targetSentence) }]` }
                    subMessage = "즐겨찾기 한 문장을 삭제할까요?"
                    cancelText = "취소"
                    confirmText = "삭제하기"
                    onCancel = { handleCancel }
                    onConfirm = { handleRealDelete }
                />
            </View>
        </Modal>
    )
}

const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1
    },

    modalContainer: {
        height: 604.67,
        backgroundColor: "#FFEC9F",
        borderTopLeftRadius: 16.67,
        borderTopRightRadius: 16.67,
        marginTop: 65
    },

    backgroundBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 89
    },

    content: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 11.67,
        gap: 98.33
    },

    titleBox: {
        marginTop: 15.67,
        backgroundColor: "#FFD321",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16.67
    },

    titleText: {
        paddingHorizontal: 10,
        paddingVertical: 6.67,
        color: "#4E4E4E",
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 13
    },

    closeButton: {
        width: 16,
        height: 16,
    },

    sentence: {
        flexDirection: "column",
        alignItems: "center",
        gap: 15.33,
        paddingVertical: 10
    }
})