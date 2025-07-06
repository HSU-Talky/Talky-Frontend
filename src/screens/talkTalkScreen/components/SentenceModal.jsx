import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RecomButton } from "./RecomButton"
import { BlurView } from "expo-blur";
import { useState } from "react";

import CLOSE from "../../../assets/images/talktalk/close.png";
import DELETE from "../../../assets/images/talktalk/delete.png";
import DELETED from "../../../assets/images/talktalk/deleted.png";

export const SentenceModal = ({ visible, onClose }) => {
    const [deleted, setDeleted] = useState([]);

    const handleDelete = (index) => {
        if (!deleted.includes(index)) setDeleted([...deleted, index]);
    }

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
                    <View style={modalStyles.sentence}>
                        { Array.from({ length: 10 }).map((_, index) => (
                            <View key = { index } style = { modalStyles.sentenceRow }>
                                <RecomButton />
                                <TouchableOpacity onPress = { () => handleDelete(index) }>
                                    <View style={ modalStyles.deleteBox }>
                                        <Image 
                                            source = { deleted.includes(index) ? DELETED : DELETE }
                                            style = { modalStyles.deleteButton }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
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
    },

    sentenceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    deleteBox: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 26.66
    },

    deleteButton: {

    }
})