import { MenuBox } from "./MenuBox";
import { StyleSheet, View } from "react-native";

import STAR from "../../../assets/talktalk/menu_star.png";
import PRAC from "../../../assets/talktalk/menu_prac.png";

export const Menu = () => {
    return (
        <View style = { styles.container }>
            <MenuBox 
                width = { 165.67 }
                title = "즐겨찾기 문장들"
                icon = { STAR }
            />
            <MenuBox 
                width = { 148.33 }
                title = "말하기 연습"
                icon = { PRAC }
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