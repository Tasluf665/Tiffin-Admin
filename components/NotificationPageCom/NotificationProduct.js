import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

import Colors from '../../constant/Colors';
import CustomeFonts from '../../constant/CustomeFonts';

export default function NotificationProduct({ image, name }) {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.productDetailsContainer}>
                <Text style={styles.productName}>{name}</Text>
                <View style={styles.priceQuantityContainer}>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantity}>Price: 60/=</Text>
                    </View>
                    <View style={{ ...styles.quantityContainer, ...{ borderColor: Colors.Red } }}>
                        <Text style={styles.quantity}>Quantity: 7</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "96%",
        backgroundColor: "white",
        alignSelf: "center",
        height: responsiveScreenHeight(9),
        flexDirection: "row",
        elevation: 8,
        marginBottom: responsiveScreenHeight(1)

    },
    image: {
        width: responsiveScreenHeight(9),
        height: responsiveScreenHeight(9),
        resizeMode: "cover",

    },
    productDetailsContainer: {
        justifyContent: "center",
        marginLeft: responsiveScreenWidth(3),
        width: responsiveScreenWidth(55)
    },
    productName: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
        marginBottom: responsiveScreenHeight(0.5),
        color: Colors.PureBlack
    },
    productPrice: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
    },

    priceQuantityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: responsiveScreenWidth(70),
        marginTop: responsiveScreenHeight(0.5)
    },
    quantityContainer: {
        width: "auto",
        borderWidth: 1,
        borderColor: Colors.Green,
        paddingHorizontal: responsiveScreenWidth(4),
        paddingVertical: responsiveScreenHeight(0.5)
    },
    quantity: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.PureBlack,
    }
})