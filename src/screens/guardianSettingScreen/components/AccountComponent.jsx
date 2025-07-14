import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const AccountComponent = ({ isRegistered, onPress }) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.input }>
                <TextInput 
                    style = { styles.inputBox }
                    placeholder = "일반 계정에 있는 고유 번호를 입력해 주세요"
                    placeholderTextColor = { "#C2C2C2" }
                />
            </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 7
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
    }
})