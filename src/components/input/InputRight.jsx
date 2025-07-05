import { Image, StyleSheet, TextInput, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import SPEAK from "../../assets/images/talktalk/speak.png";

export const InputRight = () => {
    return (
        <View style = { styles.inputRight }>
            <Image
                source = { SPEAK }
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