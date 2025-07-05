import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const RecomButton = ({ onPress, isSelected }) => {
    const text = "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안";

    return (
        <TouchableOpacity
            onPress = { onPress }
            activeOpacity = { 1 }
            style = { [styles.button, 
                {
                    opacity: isSelected ? 1 : 0.5
                }]}
        >
            <View style = { styles.textContainer }>
                <Text style = { styles.recomText }>{ text }</Text>
            </View>
        </TouchableOpacity>
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
        opacity: 1,
    }
})