import { Image, StyleSheet, TextInput, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import DEFAULT from "../../assets/images/talktalk/input_default.png";
import TYPING from "../../assets/images/talktalk/input_typing.png";
import SUBMIT from "../../assets/images/talktalk/input_submit.png";

export const InputRight = ({ status }) => {
    const getImageSource = () => {
        switch (status) {
            case "focused": return DEFAULT
            case "typing": return TYPING
            case "submit": return SUBMIT
            default: return DEFAULT
        }
    }
    return (
        <View style = { styles.inputRight }>
            <Image
                source = { getImageSource }
                style = { styles.RightImage }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputRight: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 16.67,
        backgroundColor: "#FFFFFF"
    },

    RightImage: {
        width: 23.33,
        height: 23.33
    }
})