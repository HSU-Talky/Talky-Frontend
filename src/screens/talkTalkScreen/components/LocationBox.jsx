import { StyleSheet, Text, View } from "react-native"

export const LocationBox = () => {
    return (
        <View style = { styles.locationBox }>
            <Text style = { styles.locationText }>장소</Text>
            <View style = { styles.locationLine } />
            <Text style = { styles.locationSentence }>사용자가 입력한 현재 상태</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    locationBox: {
        width: 327.33,
        height: 36,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#FFD321",
        borderRadius: 33.33,
        gap: 8
    },

    locationText: {
        fontSize: 18.67,
        fontWeight: 700,
    },

    locationLine: {
        width: 1,
        height: 22.5,
        backgroundColor: "#FFFFFF"
    },

    locationSentence: {
        fontSize: 12,
        fontWeight: 400,
    }
})