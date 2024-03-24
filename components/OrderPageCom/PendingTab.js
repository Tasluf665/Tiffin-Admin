import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { router } from 'expo-router';

import OrderItem from './OrderItem'
import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'

export default function PendingTab() {
    return (
        <View>
            <ScrollView>
                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/notification.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    price={"৳120"}
                    handleClick={() => {
                        router.push({
                            pathname: "/Notification/NotificationPage",
                            params: { stage: "stage1", data: "12.00" }
                        })

                    }}
                >
                    <View style={styles.timerContainer}>
                        <Image
                            source={require("../../assets/ApplicationImage/OrderPage/timer.png")}
                            style={styles.timer}
                        />
                        <Text style={styles.timerText}>12.00</Text>
                    </View>
                </OrderItem>
                <OrderItem
                    image={require("../../assets/ApplicationImage/OrderPage/notification2.png")}
                    name={"Ibnul"}
                    time={"Time: 12:27 pm"}
                    date={"Date: 12-03-23"}
                    timer={"12.00"}
                    price={"৳120"}
                    handleClick={() => {
                        router.push({
                            pathname: "/Notification/NotificationPage",
                            params: { stage: "stage1", data: "12.30" }
                        })

                    }}
                >
                    <View style={styles.timerContainer}>
                        <Image
                            source={require("../../assets/ApplicationImage/OrderPage/timer.png")}
                            style={styles.timer}
                        />
                        <Text style={styles.timerText}>12.30</Text>
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
                            pathname: "/Notification/NotificationPage",
                            params: { stage: "stage2", data: "Received: 11:42 am" }
                        })

                    }}
                >
                    <View style={styles.statusContainer}>
                        <Image
                            source={require("../../assets/ApplicationImage/OrderPage/cycle.png")}
                            style={styles.timer}
                        />
                        <Text style={styles.status}>Pick up</Text>
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