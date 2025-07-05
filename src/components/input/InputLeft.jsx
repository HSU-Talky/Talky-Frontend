import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

import STAR from "../../assets/images/talktalk/star.png";
import STAR_PRESS from "../../assets/images/talktalk/star_press.png";
import { useState } from "react";

export const InputLeft = ({ status }) => {
    const [selected, setSelected] = useState(false);

    const onPress = () => {
        setSelected(prev => !prev);
        Alert.alert(selected ? "즐겨찾기 해제" : "즐겨찾기 완료!");
    };

    return (
        <TouchableOpacity onPress = { onPress }>
            <View style = { styles.inputLeft }>
                <Image
                    source = { selected ? STAR_PRESS : STAR } 
                    style = { styles.leftImage }
                />
            </View>
        </TouchableOpacity>
        
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