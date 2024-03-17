import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { useLocalSearchParams } from "expo-router";

import TabBar from '../../components/common/TabBar';
import Colors from '../../constant/Colors';
import CustomeFonts from '../../constant/CustomeFonts';
import NotificationItem from '../../components/NotificationPageCom/NotificationItem';
import NotificationProduct from '../../components/NotificationPageCom/NotificationProduct';

export default function NotificationPage() {
    const params = useLocalSearchParams();
    console.log("🚀 ~ NotificationPage ~ router:", params)


    const stage = "stage1"

    const [select, setSelect] = React.useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {stage === "stage1" ? <TabBar
                    select={select}
                    setSelect={setSelect}
                    btn1={"Cancel"}
                    btn2={"Receive"}
                    btn1Style={{ backgroundColor: Colors.Red, borderColor: Colors.Red }}
                    btn2Style={{ backgroundColor: Colors.Green, borderColor: Colors.Green }}
                    btn1TextStyle={{ color: Colors.White }}
                    btn2TextStyle={{ color: Colors.White }}
                /> : stage === "stage2" ?
                    <View style={styles.topBarRider}>
                        <Text style={styles.riderText}>Please wait for Rider...</Text>
                        <Image style={styles.rider} source={require("../../assets/ApplicationImage/NotificationPage/rider.png")} />
                    </View> :
                    <View style={styles.topBarRider}>
                        <Text style={styles.riderText}>On the way...</Text>
                        <Image style={styles.rider} source={require("../../assets/ApplicationImage/NotificationPage/rider.png")} />
                    </View>
                }
            </View>

            <View style={styles.topContainer}>
                <Image source={require("../../assets/ApplicationImage/logo.png")} style={styles.logo} />
                {stage === "stage1" ?
                    <View style={styles.timerContainer}>
                        <Image style={styles.timer} source={require("../../assets/ApplicationImage/NotificationPage/timer.png")} />
                        <Text style={styles.timerText}>4.12</Text>
                    </View> :
                    stage === "stage2" ?
                        <View style={styles.receivedTimeContainer}>
                            <Text style={styles.receivedTime}>Received: 11:42 am</Text>
                        </View> :
                        <View style={styles.receivedTimeContainer}>
                            <Text style={styles.receivedTime}>Received: 11:42 am</Text>
                        </View>}
            </View>
            <ScrollView>
                <NotificationItem
                    name={"Ibnul akif"}
                    bill={120}
                    date={"23-11-2023"}
                    orderTime={"11:40 am"}
                    id={"#23N3456"}
                    address={"Sheikh Russell Hall (room no 323)"}
                />

                <View style={styles.notificationProductContainer}>

                    <NotificationProduct
                        image={require("../../assets/ApplicationImage/ProductPage/food1.jpg")}
                        name={"Chicken Patty Burger"}
                    />
                    <NotificationProduct
                        image={require("../../assets/ApplicationImage/ProductPage/food1.jpg")}
                        name={"Chicken Patty Burger"}
                    />
                    <NotificationProduct
                        image={require("../../assets/ApplicationImage/ProductPage/food1.jpg")}
                        name={"Chicken Patty Burger"}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BackgroundColor_Gray,
    },
    tabContainer: {
        marginTop: responsiveScreenHeight(2)
    },
    topContainer: {
        width: responsiveScreenWidth(96),
        backgroundColor: Colors.White,
        height: responsiveScreenHeight(6),
        elevation: 8,
        alignSelf: "center",
        paddingHorizontal: responsiveScreenWidth(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    topBarRider: {
        width: responsiveScreenWidth(96),
        backgroundColor: Colors.White,
        height: responsiveScreenHeight(6),
        elevation: 8,
        alignSelf: "center",
        paddingHorizontal: responsiveScreenWidth(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: responsiveScreenHeight(2)
    },
    riderText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
    },
    rider: {
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(5),
        resizeMode: "center"
    },
    receivedTimeContainer: {
        width: responsiveScreenWidth(45),
        height: responsiveScreenHeight(4),
        backgroundColor: Colors.Green2,
        justifyContent: "center",
        alignItems: "center"
    },
    receivedTime: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.White
    },
    logo: {
        width: responsiveScreenWidth(28),
        height: responsiveScreenHeight(5),
        resizeMode: "center"
    },
    timerContainer: {
        width: responsiveScreenWidth(20),
        height: responsiveScreenHeight(3.5),
        backgroundColor: Colors.Black,
        marginRight: responsiveScreenWidth(5),
        borderRadius: responsiveScreenWidth(4),
        paddingHorizontal: responsiveScreenWidth(2),
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    timer: {
        width: responsiveScreenWidth(5),
        height: responsiveScreenHeight(5),
        resizeMode: "center"
    },
    timerText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
        color: Colors.Yellow
    },

    notificationProductContainer: {
        marginTop: responsiveScreenHeight(2)
    }
})