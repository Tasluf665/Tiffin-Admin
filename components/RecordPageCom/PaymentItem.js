import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function PaymentItem({ totalOrder, cancelled, returned, delivered, totalSell, date, paid, due }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Total Order:</Text>
                <Text style={styles.title}>Cancelled:</Text>
                <Text style={styles.title}>Return:</Text>
                <Text style={styles.title}>Delivered:</Text>
                <Text style={styles.title}>Total Sell:</Text>
            </View>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{totalOrder}</Text>
                <Text style={styles.number}>{cancelled}</Text>
                <Text style={styles.number}>{returned}</Text>
                <Text style={styles.number}>{delivered}</Text>
                <Text style={styles.number}>{totalSell}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>Date: {date}</Text>
                </View>
                <View style={{
                    ...styles.dateContainer, ...{
                        borderColor: due > 0 ? Colors.Red : Colors.Green
                    }
                }}>
                    <Text style={styles.date}>Paid: {paid}</Text>
                </View>
                <View style={{
                    ...styles.dateContainer,
                    ...{
                        backgroundColor: due > 0 ? Colors.Red : Colors.Green3,
                        borderColor: due > 0 ? Colors.Red : Colors.Green3
                    }
                }}>
                    <Text style={{
                        ...styles.date, ...{
                            color: due > 0 ? Colors.White : Colors.PureBlack,
                        }
                    }}>Due: {due}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: responsiveScreenWidth(96),
        alignSelf: "center",
        backgroundColor: Colors.White,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(2),
        flexDirection: "row",
        borderRadius: 8,
        gap: 5,
        elevation: 3
    },
    titleContainer: {
        width: responsiveScreenWidth(26),
        alignItems: "flex-end",
        gap: responsiveScreenHeight(0.5),
    },
    title: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    numberContainer: {
        width: responsiveScreenWidth(18),
        alignItems: "center",
        gap: responsiveScreenHeight(0.5),
    },
    number: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    rightContainer: {
        width: responsiveScreenWidth(45),
        gap: responsiveScreenHeight(1),
        justifyContent: "center",

    },
    dateContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.Blue,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(0.5)
    },
    date: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    }
})