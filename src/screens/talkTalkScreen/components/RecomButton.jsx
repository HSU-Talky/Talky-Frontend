import { StyleSheet, View } from "react-native"

export const RecomButton = ({ opacity }) => {
    return (
        <View style = { [styles.button, { opacity }] } />
    )
}

const styles = StyleSheet.create({
    button: {
        width: 302.67,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 26.67,
        padding: 12
    }
})