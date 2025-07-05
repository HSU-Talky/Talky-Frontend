import { Image, StyleSheet, TextInput, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import SPEAK from "../../assets/images/talktalk/speak.png";
import { InputLeft } from "./InputLeft";
import { InputRight } from "./InputRight";

export const TalkInput = () => {
    return (
        <View style = { styles.container }>
            <InputLeft />
            <TextInput
                placeholder = "표현하고 싶은 문장을 적어 봐!"
                placeholderTextColor = { "#767676" }
                style = { styles.input }
            />
            <InputRight />
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
        gap: 5
    },

    input: {
        width: 243.333,
        height: 40.668,
        paddingLeft: 12,
        borderRadius: 33.333,
        borderWidth: 1.668,
        borderColor: "#FFEC9F"
    }
})