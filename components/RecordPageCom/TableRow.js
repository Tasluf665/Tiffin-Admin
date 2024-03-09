import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function TableRow({ col1, col2, col3, backgroundColor = "white", textColor = "black" }) {
    return (
        <View style={styles.rowContainer}>
            <View style={{ ...styles.col, ...{ backgroundColor: backgroundColor } }}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ ...styles.heading, ...{ color: textColor } }}>{col1}</Text>
            </View>
            <View style={{ ...styles.col, ...{ width: responsiveScreenWidth(20), backgroundColor: backgroundColor } }}>
                <Text style={{ ...styles.heading, ...{ color: textColor } }}>{col2}</Text>
            </View>
            <View style={{ ...styles.col, ...{ width: responsiveScreenWidth(30), backgroundColor: backgroundColor } }}>
                <Text style={{ ...styles.heading, ...{ color: textColor } }}>{col3}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        gap: responsiveScreenWidth(1)
    },
    col: {
        width: responsiveScreenWidth(44),
        height: responsiveScreenHeight(4),
        backgroundColor: Colors.Green2,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        color: Colors.White,
        fontSize: responsiveScreenFontSize(1.8),
    }
})