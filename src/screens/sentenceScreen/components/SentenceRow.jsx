import { Image, Pressable, StyleSheet, View } from "react-native"
import { RecomButton } from "../../talkTalkScreen/components/RecomButton"

import DELETE from "../../../assets/images/talktalk/delete.png";
import DELETED from "../../../assets/images/talktalk/deleted.png";

export const SentenceRow = ({ index, text, deleted, onDelete }) => {
    return (
        <View key = { index } style = { rowStyles.sentenceRow }>
            <RecomButton text = { text } />
            <Pressable onPress = { () => onDelete(index) }>
                {({ pressed }) => (
                    <View style = { rowStyles.deleteBoxContainer }>
                        <View style = {[
                            rowStyles.deleteBox,
                            { opacity: pressed ? 1 : 0.5 }
                        ]} />
                    <Image 
                        source = { deleted.includes(index) ? DELETED : DELETE }
                        style = { rowStyles.deleteButton }
                    />
                    </View>
                )}
            </Pressable>
        </View>
    )
}

const rowStyles = StyleSheet.create({
    sentenceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    deleteBoxContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },

    deleteBox: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#FFF",
        borderRadius: 26.66,
    },

    deleteButton: {
        width: 18,
        height: 20
    }
})