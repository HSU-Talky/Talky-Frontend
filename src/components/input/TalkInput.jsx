import { Image, Keyboard, StyleSheet, TextInput, View } from "react-native"

import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { useMemo, useState } from "react";
import { Toast } from "./Toast";
import { useInput } from "../../hooks/useInput";

export const TalkInput = () => {
    const {
        text,
        status,
        rightPressed,
        showToast,
        setShowToast,
        getPlaceholderColor,
        getInputBorderColor,
        onFocus,
        onBlur,
        onChangeText,
        onSubmit,
        handleRightPress,
        handleShowToast,
    } = useInput();

    return (
        <View style = {[ 
            styles.container, 
            status === "focused" && styles.focusContainer,
            status === "typing" && styles.typingContainer,
            status === "submitted" && styles.submitContainer,
            rightPressed && styles.rightPressedContainer
        ]}>
            <InputLeft 
                status = { status }
                onFavoriteToggle = { handleShowToast }
            />
            <TextInput
                placeholder = "표현하고 싶은 문장을 적어 봐!"
                placeholderTextColor = { getPlaceholderColor() }
                style = {[ 
                    styles.input, 
                    { borderColor: getInputBorderColor() },
                    rightPressed && styles.inputRightPressed
                ]}
                value = { text }
                onFocus = { onFocus }
                onBlur = { onBlur }
                onChangeText = { onChangeText }
                onSubmitEditing = { onSubmit }
                returnKeyType = "done"
                blurOnSubmit = { false }
            />
            <InputRight status = { status } onPress = { handleRightPress }/>
            { showToast && 
                <Toast 
                    message = "즐겨찾기 완료!"
                    onHide = { () => setShowToast(false) } 
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 334.667,
        height: 54,
        borderWidth: 1.667,
        borderColor: "#FFD321",
        borderRadius: 20,
        gap: 5,
        backgroundColor: "transparent"
    },

    focusContainer: {
        backgroundColor: "#FFEC9F33",
        borderColor: "transparent",
        opacity: 1
    },

    typingContainer: {
        backgroundColor: "#FFEC9F"
    },
    
    submitContainer: {
        backgroundColor: "#FFE890"
    },

    rightPressedContainer: {
        backgroundColor: "#FFD321"
    },

    inputRightPressed: {
        backgroundColor: "#FFFFFF"
    },

    input: {
        width: 243.333,
        height: 40.668,
        paddingLeft: 12,
        borderRadius: 33.333,
        borderWidth: 1.668,
        backgroundColor: "transparent"
    }
})