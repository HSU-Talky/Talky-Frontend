import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import EditableField from "../../../components/setting/EditableField"
import { Toast } from "../../../components/input/Toast"
import { useDialogOpen } from "../../../hooks/useDialogOpen"
import Dialog from "../../../components/dialog/Dialog"

import { useState } from "react"

export const AccountComponent = ({ isRegistered, onPress }) => {
    return (
        <>
            <TouchableOpacity 
                style = {[ 
                    styles.registerBox,
                    isRegistered ? styles.deleteBox : styles.registerBox
                ]}
                onPress = { onPress }
                activeOpacity = { 0.5 }
            >
                <Text style = {[ 
                    styles.registerText,
                    isRegistered ? styles.deleteText : styles.registerText
                ]}>
                    { isRegistered ? "삭제" : "등록" }
                </Text>
            </TouchableOpacity>        
        </>
    )
}

const styles = StyleSheet.create({
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
    }
})