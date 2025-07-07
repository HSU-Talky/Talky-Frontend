import { StyleSheet, Text, View } from "react-native"
import { RecomButton } from "./RecomButton"

export const RecomBox = () => {
    const sentences = [
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 1",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 2",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 3",
        "안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕 4"
    ];

    return (
        <View style = { styles.container }>
            <View style = { styles.textContainer }>
                <View style = { styles.RecomTitle }>
                    <Text style = { styles.TitleText }>
                        추천 문장 몇 개 갖고 왔는데, 골라 봐!
                    </Text>
                </View>
                { sentences.map((sentence, index) => (
                    <RecomButton
                        key = { index }
                        text = { sentence }
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 327.33,
        height: 256,
        backgroundColor: "#FFEC9F",
        borderRadius: 33.33,
        padding: 12
    },

    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },

    RecomTitle: {
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
    }
})