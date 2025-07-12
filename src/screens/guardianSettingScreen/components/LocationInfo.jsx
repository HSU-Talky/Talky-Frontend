import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SettingBox from "../../../components/setting/SettingBox"

import LOCATION from "../../../assets/images/talktalk/location.png"
import { useState } from "react"

export const LocationInfo = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prev => !prev);
    }

    return (
        <SettingBox 
            height = { 148 } 
            title = "위치 알림 서비스"
            bgColor = { isToggled ? "#FFEC9F" : "#FFF3C7" }
        >
            <View style = { styles.content }>
                <View style = { styles.notify }>
                    <Image source = { LOCATION } style = { styles.notifyImage }/>
                    <Text style = { styles.notifyText }>1시간마다 위치 알림 받기</Text>
                    <TouchableOpacity 
                        style = {[ 
                            styles.notifyToggle,
                            isToggled ? styles.notifyToggleOn : styles.notifyToggleOff
                        ]}
                        onPress = { handleToggle }
                        activeOpacity = { 0.5 }
                    >
                        <View style = {[ 
                            styles.toggle,
                            isToggled ? styles.toggleOn : styles.toggleOff
                        ]} />
                    </TouchableOpacity>
                </View>
                <Text style = { styles.explain }>
                    {`위치 서비스 알림을 받기 위해서는\n텔레그램 활성화가 필요합니다`}
                </Text>
                <View style = { styles.button }>
                    <Text style = { styles.buttonText }>활성화 하러 가기</Text>
                </View>
            </View>
        </SettingBox> 
    )
}

const styles = StyleSheet.create({

    content: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
        gap: 8
    },

    notify: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13
    },

    notifyImage: {
        width: 18,
        height: 20.33,
        resizeMode: "contain"
    },

    notifyText: {
        fontSize: 16.29,
        fontWeight: 400,
        lineHeight: 20,
        color: "#2B2B2B"
    },

    notifyToggle: {
        width: 48,
        height: 24.42,
        backgroundColor: "#FFFFFF",
        borderRadius: 42.11,
        display: "flex",
        justifyContent: "center",
    },

    notifyToggleOn: {
        alignItems: "flex-end",
        paddingRight: 2.53
    },

    notifyToggleOff: {
        alignItems: "flex-start",
        paddingLeft: 2.53
    },
    
    toggle: { 
        width: 21.05,
        height: 21.05,
        borderWidth: 1,
        borderRadius: 84.21
    },

    toggleOn: {
        backgroundColor: "#FFD321",
        borderColor: "#FFEC9F"
    },

    toggleOff: {
        backgroundColor: "#9F9F9F",
        borderColor: "#D9D9D9"
    },

    explain: {
        fontSize: 10,
        fontWeight: 400,
        textAlign: "center",
        color: "#4E4E4E"
    },

    button: {
        width: 117,
        height: 28,
        backgroundColor: "#FFFEF6",
        borderRadius: 33.33,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 16,
        color: "#2B2B2B"
    }
})