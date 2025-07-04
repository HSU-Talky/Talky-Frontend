import { StyleSheet, Text, View } from "react-native"

export const RecomButton = ({ opacity }) => {
    return (
        <View style = { [styles.button, { opacity }] }>
            <Text style = { styles.recomText }>안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 302.67,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 26.67,
        paddingHorizontal: 13,
        paddingVertical: 10,
        justifyContent: "center",
    },

    recomText: {
        fontSize: 12,
        fontWeight: "500",
    }
})