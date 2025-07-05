import { Image, StyleSheet, TextInput, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";

export const InputLeft = () => {
    return (
        <View style = { styles.inputLeft }>
            <Image
                source = { STAR } 
                style = { styles.leftImage }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputLeft: {
        justifyContent: "center",
        alignItems: "center",
        width: 28,
        height: 28,
        backgroundColor: "#FFFFFF",
        borderRadius: 33.3
    },

    leftImage: {
        width: 19.33,
        height: 19.33
    }
})