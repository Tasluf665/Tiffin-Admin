import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts';

export default function AddProduct() {
    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../assets/ApplicationImage/ProductPage/handIcon.png")}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.text}>+ add a New Product</Text>
            </View>

            <Text>Product Name</Text>
            <TextInput

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(100),
        marginTop: responsiveScreenHeight(2),
    },
    barContainer: {
        width: responsiveScreenWidth(85),
        backgroundColor: Colors.White,
        paddingVertical: responsiveScreenHeight(0.8),
        paddingHorizontal: responsiveScreenWidth(2),
        alignItems: "center",
        position: "relative"
    },
    logoContainer: {
        position: "absolute",
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        backgroundColor: Colors.Black5,
        left: responsiveScreenWidth(-1.8),
        top: responsiveScreenHeight(-0.7),
        borderRadius: responsiveScreenWidth(12),
        justifyContent: "center",
    },
    logo: {
        width: "auto",
        height: "85%",
        resizeMode: "contain",
    },
    text: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2)
    },
})