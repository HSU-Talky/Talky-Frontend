import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const MenuBox = ({ width, title, icon, onPress }) => {
    const Box = onPress ? TouchableOpacity : View;

    return (
        <Box 
            onPress = { onPress } 
            style = { [styles.container, { width }] }
        >
            <View style = { styles.menuTitle }>
                <Text style = { styles.titleText }>{ title }</Text>
            </View>
            <Image 
                source = { icon }
                style = { styles.iconImage }
                resizeMode = "contain"
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 141.333,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 236, 159, 0.2)",
        borderColor: "#FFD321",
        borderRadius: 16.67,
        borderWidth: 6.67,
        gap: 8
    },

    menuTitle: {
        alignItems: "center",
        textAlign: "center"
    },

    titleText: {
        backgroundColor: "rgba(255, 211, 33, 0.5)",
        paddingHorizontal: 10,
        paddingVertical: 6.67,
        textAlign: "center",
        borderRadius: 16.67,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "600",
        marginTop: 21.67
    },

    iconImage: {
        height: 65,
        marginBottom: 16.33
    }
});