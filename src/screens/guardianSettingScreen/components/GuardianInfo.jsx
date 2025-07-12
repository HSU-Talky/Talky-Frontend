import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import SettingBox from "../../../components/setting/SettingBox"
import NameIdGroup from "../../../components/setting/NameIdGroup"
import EditableField from "../../../components/setting/EditableField"

import ACCOUNT from "../../../assets/images/guardian-setting/connetAccount.png"

export const GuardianInfo = () => {
    return (
        <SettingBox height = { 216 } title = "사용자 정보" bgColor = "#FFF3C7">
            <View style = { styles.content }>
                <NameIdGroup />
                <View style = { styles.accountContent }>
                    <View style = { styles.title }>
                        <Image source = { ACCOUNT } style = { styles.accountImg }/>
                        <Text style = { styles.mainText }>연결 계정</Text>
                        <Text style = { styles.subText }>
                            (일반 계정에 있는 고유 번호를 입력해 주세요)
                        </Text>
                    </View>
                    <View style = { styles.input }>
                        <TextInput 
                            style = { styles.inputBox }
                            placeholder = "일반 계정에 있는 고유 번호를 입력해 주세요"
                            placeholderTextColor = { "#C2C2C2" }
                        />
                        <View style = { styles.registerBox }>
                            <Text style = { styles.registerText }>등록</Text>
                        </View>
                    </View>
                </View>
                <View style = { styles.plusBox }>
                    <Text style = { styles.plus }>+ 연결 계정 추가</Text>
                </View>
            </View>
        </SettingBox> 
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35
    },

    accountContent: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        gap: 4.66
    },

    accountImg: {
        width: 27.34,
        height: 28,
        resizeMode: "contain"
    },

    mainText: {
        color: "#2B2B2B",
        fontSize: 12,
        fontWeight: 500
    },

    subText: {
        color: "#464646",
        fontSize: 10,
        fontWeight: 400
    },

    input: {
        display: "flex",
        flexDirection: "row",
        gap: 7,
    },

    inputBox: {
        height: 20,
        backgroundColor: "#FFFEF6",
        borderRadius: 20,
        fontSize: 12,
        paddingVertical: 1,
        paddingHorizontal: 12,
    },

    registerBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 39,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#FFD321"
    },

    registerText: {
        color: "#9F9F9F",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 12
    },

    plusBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 102,
        height: 20,
        backgroundColor: "#FFEC9F",
        borderRadius: 10,
        borderColor: "#FFD321",
        borderWidth: 1,
        marginTop: 18
    },

    plus: {
        color: "#2B2B2B",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 15
    }
})