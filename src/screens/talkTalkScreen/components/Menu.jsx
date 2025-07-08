import { MenuBox } from "./MenuBox";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SentenceModal } from "../../sentenceScreen/components/SentenceModal";

import MENU_STAR from "../../../assets/images/talktalk/menu_star.png";
// import MENU_PRAC from "../../../assets/images/talktalk/menu_prac.png";
import { useState } from "react";

export const Menu = () => {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = { styles.container }>
            <MenuBox 
                title = "즐겨찾기 문장들"
                icon = { MENU_STAR }
                onPress = { () => setModalOpen(true) }
            />
            {/* <MenuBox 
                width = { 148.33 }
                title = "말하기 연습"
                icon = { MENU_PRAC }
                onPress = { () => navigation.navigate("Practice") }
            /> */}

            <SentenceModal
                visible = { modalOpen }
                onClose = { () => setModalOpen(false) }
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        gap: 13.33
    }
})