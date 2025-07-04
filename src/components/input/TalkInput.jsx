import { Image, StyleSheet, TextInput, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import SPEAK from "../../assets/images/talktalk/speak.png";

export const TalkInput = () => {
    return (
        <View style = { styles.container }>
            <View style = { styles.inputLeft }>
                <Image
                    source = { STAR } 
                    style = { styles.leftImage }
                />
            </View>
            <TextInput
                placeholder = "표현하고 싶은 문장을 적어 봐!"
                placeholderTextColor = { "#767676" }
                style = { styles.input }
            />
            <View style = { styles.inputRight }>
                <Image
                    source = { SPEAK }
                    style = { styles.RightImage }
                />
            </View>
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
    },

    input: {
        width: 243.333,
        height: 40.668,
        paddingLeft: 12,
        borderRadius: 33.333,
        borderWidth: 1.668,
        borderColor: "#FFEC9F"
    },

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