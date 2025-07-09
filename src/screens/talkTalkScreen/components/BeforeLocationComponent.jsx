import { Pressable, StyleSheet, Text, View } from "react-native"

export const BeforeLocationComponent = ({ selected, onSelect }) => {
    const locationList = [
        "병원", "식당", "학교", "마트", "교통", "은행", "약국", "기타"
    ];

    const showList = [];
    for (let i = 0; i < locationList.length; i += 4) {
        showList.push(locationList.slice(i, i + 4));
    }


    return (
        <View style = { styles.container } >
            { showList.map((row, rowIndex) => (
                <View key = { rowIndex } style = { styles.row }>
                    { row.map((location, index) => (
                        <Pressable 
                            key = { index }
                            onPress = { () => onSelect(location) } 
                            style = {[
                                styles.boxContainer,
                                selected === location && styles.selectedBox
                            ]}>
                            <Text style = { styles.locationText }>{ location }</Text>
                        </Pressable>
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 16
    },

    row: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },

    boxContainer: {
        width: 58,
        height: 34,
        borderRadius: 43.54,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },

    selectedBox: {
        backgroundColor: "#FFD321"
    },

    locationText: {
        fontSize: 15.68,
        fontWeight: 400
    }
})