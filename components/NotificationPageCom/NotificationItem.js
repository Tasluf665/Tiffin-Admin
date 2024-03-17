import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { EvilIcons } from '@expo/vector-icons';

import Colors from '../../constant/Colors';
import CustomeFonts from '../../constant/CustomeFonts';

export default function NotificationItem({ name, bill, address, date, orderTime, id }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemDetailsContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.orderContainer}>
                        <Image source={require("../../assets/ApplicationImage/NotificationPage/profile.png")} style={styles.icon} />
                        <Text style={styles.orderText}>{name}</Text>
                    </View>
                    <View style={styles.orderContainer}>
                        <Image source={require("../../assets/ApplicationImage/NotificationPage/bill.png")} style={styles.icon} />
                        <Text style={styles.orderText}>Bill: {bill}/=</Text>
                    </View>

                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>Date: {date}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>Order Time: {orderTime}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            ...styles.dateContainer,
                            ...{
                                backgroundColor: Colors.Red,
                                borderColor: Colors.Red,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 5
                            }
                        }}>
                        <Text style={{
                            ...styles.date, ...{
                                color: Colors.White,
                            }
                        }}>{id}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ ...styles.orderContainer, ...{ marginTop: responsiveScreenHeight(1) } }}>
                <Image source={require("../../assets/ApplicationImage/NotificationPage/search.png")} style={styles.icon} />
                <Text style={styles.orderText}>{address}</Text>
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
        borderRadius: 8,
        elevation: 8
    },
    itemDetailsContainer: {
        flexDirection: "row",
        gap: 10,
    },
    leftContainer: {
        width: responsiveScreenWidth(41),
        gap: responsiveScreenHeight(1.5),
        justifyContent: "space-around",
        paddingVertical: responsiveScreenHeight(1.5)
    },

    orderContainer: {
        width: "98%",
        paddingHorizontal: responsiveScreenWidth(2),
        backgroundColor: Colors.Gray,
        height: responsiveScreenHeight(3.5),
        justifyContent: "center",
        position: "relative",
        alignSelf: "flex-end"
    },
    orderText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.PureBlack,
        marginLeft: responsiveScreenWidth(8)
    },
    icon: {
        width: responsiveScreenWidth(10),
        height: responsiveScreenWidth(10),
        position: "absolute",
        resizeMode: "cover",
        left: responsiveScreenWidth(-2)

    },



    rightContainer: {
        width: responsiveScreenWidth(48),
        gap: responsiveScreenHeight(1),
        justifyContent: "center",

    },
    dateContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.Green,
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(0.5)
    },
    date: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.PureBlack,
        textAlign: "center"
    }
})