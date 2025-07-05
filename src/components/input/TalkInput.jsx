import { Image, StyleSheet, TextInput, View } from "react-native"

import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";
import { useState } from "react";

export const TalkInput = () => {
    const [text, setText] = useState("");
    const [focused, setFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    let status = "default";
    if (submitted) status = "submitted"; /* 입력 완료 */
    else if (text !== "") status = "typing"; /* 입력 중 */
    else if (focused) status = "focused"; /* 텍스트 입력 없이 포커스 */

    const getPlaceholderColor = () => {
        switch (status) {
            case "focused": return "#D2D2D2";
            default: return "#767676";
        }
    }

    const getInputBorderColor = () => {
        switch (status) {
            case "focused": return "#FFD321CC";
            case "typing": return "#FFD321CC";
            case "submit": return "#FFD321";
            default: return "#FFEC9F33";
        }
    }

    const onFocus = () => {
        setFocused(true);
        setSubmitted(false);
    }

    const onBlur = () => {
        setFocused(false);
        if (text === "") setSubmitted(false);
    }

    const onChangeText = (value) => {
        setText(value);
        setSubmitted(false);
    }

    const onSubmit = () => {
        if (text.trim() !== "") {
            setSubmitted(true);
        }
    }

    return (
        <View style = {[ 
            styles.container, 
            status === "focused" && styles.focusContainer,
            status === "typing" && styles.typingContainer,
            status === "submitted" && styles.submitContainer
        ]}>
            <InputLeft status = { status }/>
            <TextInput
                placeholder = "표현하고 싶은 문장을 적어 봐!"
                placeholderTextColor = { getPlaceholderColor() }
                style = {[ styles.input, { borderColor: getInputBorderColor() } ]}
                value = { text }
                onFocus = { onFocus }
                onBlur = { onBlur }
                onChangeText = { onChangeText }
                onSubmitEditing = { onSubmit }
                returnKeyType = "done"
                blurOnSubmit = { true }
            />
            <InputRight status = { status } />
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

    input: {
        width: 243.333,
        height: 40.668,
        paddingLeft: 12,
        borderRadius: 33.333,
        borderWidth: 1.668,
        backgroundColor: "transparent"
    }
})