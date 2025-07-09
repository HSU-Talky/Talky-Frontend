import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AfterMainSentence } from "./AfterMainSentence";

import RESET from "../../../assets/images/talktalk/reset.png";
import { useState } from "react";
import { BeforeLocationComponent } from "./BeforeLocationComponent";

export const BeforeMainBox = () => {
    const [sentences, setSentences] = useState([
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 1",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 2",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 3",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 4"
    ]);

    const handleReset = () => {
        setSentences([
            "새 문장 새 문장 새 문장 새 문장 새 문장 1",
            "새 문장 새 문장 새 문장 새 문장 새 문장 2",
            "새 문장 새 문장 새 문장 새 문장 새 문장 3",
            "새 문장 새 문장 새 문장 새 문장 새 문장 4"
        ])
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.titleContainer }>
                    <View style = { styles.BoxTitle }>
                        <Text style = { styles.TitleText }>
                            현재 상황을 설명해 주세요!
                        </Text>
                    </View>
            </View>
            <TextInput 
                placeholder = "장소, 현재 상태를 간단하게 입력해 주세요." 
                placeholderTextColor = { "#9F9F9F" }   
                style = { styles.input }        
            />
            <BeforeLocationComponent />
            <TouchableOpacity style = { styles.startBtn }>
                <Text style = { styles.buttonText }>시작</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 327.33,
        height: 256,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEC9F",
        borderRadius: 33.33,
        padding: 12,
        gap: 13
    },

    titleContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },

    BoxTitle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFD321",
        borderRadius: 16.67,     
        paddingHorizontal: 10,
        paddingVertical: 6.67
    },

    TitleText: {
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 14,
        textAlign: "center"
    },

    input: {
        width: 302.67,
        height: 40,
        borderRadius: 26.67,
        backgroundColor: "#FFFFFF",
        paddingLeft: 10,
        fontSize: 12
    },

    startBtn: {
        width: 116,
        height: 39.21,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFD321",
        borderRadius: 27.23
    },

    buttonText: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 600
    }
})