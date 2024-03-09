import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function Title({ title, color }) {
    return (
        <View style={styles.titleContainer}>
            <View style={{ ...styles.circle, ...{ backgroundColor: color } }}></View>
            <Text style={{ ...styles.title, ...{ color: color } }}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: responsiveScreenWidth(96),
        alignSelf: "center",
        backgroundColor: Colors.White,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(1),
        elevation: 8,
        flexDirection: "row",
        gap: responsiveScreenWidth(3),
        alignItems: "center"
    },
    circle: {
        width: responsiveScreenWidth(5),
        height: responsiveScreenWidth(5),
        backgroundColor: Colors.Red,
        borderRadius: responsiveScreenWidth(5)
    },
    title: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.Red
    }
})