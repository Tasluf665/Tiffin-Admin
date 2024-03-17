import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

import OrderItem from './OrderItem'
import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function OrderTab() {

    return (
        <View>
            <ScrollView>
                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/order.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    btnContainerStyle={{ backgroundColor: Colors.Yellow2 }}
                    handleClick={() => {
                        router.push("/Notification?stage=stage1")
                    }}
                >
                    <View style={styles.statusContainer}>
                        <AntDesign name="closecircle" size={16} color={Colors.Red} />
                        <Text style={{ ...styles.status, ...{ color: Colors.Red } }}>Manager</Text>
                    </View>
                </OrderItem>
                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/order.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    btnContainerStyle={{ backgroundColor: Colors.Yellow2 }}
                    handleClick={() => {
                        router.push({
                            pathname: "/Notification",
                            params: { stage: "stage1" }
                        })
                    }}
                >
                    <View style={styles.statusContainer}>
                        <AntDesign name="closecircle" size={16} color={Colors.Red} />
                        <Text style={{ ...styles.status, ...{ color: Colors.Red } }}>Rider</Text>
                    </View>
                </OrderItem>

                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/order.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    btnContainerStyle={{ backgroundColor: Colors.Yellow2 }}
                    handleClick={() => {
                        router.push({
                            pathname: "/Notification",
                            params: { stage: "stage2" }
                        })
                    }}
                >
                    <View style={styles.statusContainer}>
                        <FontAwesome name="refresh" size={16} color={Colors.Red} />
                        <Text style={{ ...styles.status, ...{ color: Colors.Red } }}>Return</Text>
                    </View>
                </OrderItem>

                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/order.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    btnContainerStyle={{ backgroundColor: Colors.Blue }}
                    imageContainerStyle={{ backgroundColor: Colors.Green }}
                    handleClick={() => {
                        router.push({
                            pathname: "/Notification",
                            params: { stage: "stage3" }
                        })
                    }}
                >
                    <View style={styles.statusContainer}>
                        <Image
                            source={require("../../assets/ApplicationImage/OrderPage/deliver.png")}
                            style={styles.timer}
                        />
                        <Text style={styles.status}>Delivered</Text>
                    </View>
                </OrderItem>

                <View style={{ paddingBottom: responsiveScreenHeight(16) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: Colors.Black2,
        flexDirection: "row",
        borderRadius: 10,
        width: responsiveScreenWidth(22),
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        paddingVertical: 1,
        alignSelf: "center"
    },
    timer: {
        width: responsiveScreenWidth(5),
        height: responsiveScreenWidth(5),
        resizeMode: "contain",
    },
    timerText: {
        color: Colors.Yellow,
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
    statusContainer: {
        backgroundColor: Colors.White,
        flexDirection: "row",
        width: responsiveScreenWidth(30),
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        paddingVertical: 1,
        borderRadius: 5,
    },
    status: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8)
    },
})