import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import TabBar from '../../components/common/TabBar';
import Colors from '../../constant/Colors';

export default function NotificationPage() {
    const [select, setSelect] = React.useState(true)

    return (
        <View>
            <View style={styles.tabContainer}>
                <TabBar
                    select={select}
                    setSelect={setSelect}
                    btn1={"Cancel"}
                    btn2={"Receive"}
                    btn1Style={{ backgroundColor: Colors.Red, borderColor: Colors.Red }}
                    btn2Style={{ backgroundColor: Colors.Green, borderColor: Colors.Green }}
                    btn1TextStyle={{ color: Colors.White }}
                    btn2TextStyle={{ color: Colors.White }}
                />
            </View>

            <View style={styles.topContainer}>
                <Image source={require("../../assets/ApplicationImage/logo.png")} style={styles.logo} />
                <View style={styles.timerContainer}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
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
    logo: {
        width: responsiveScreenWidth(28),
        height: responsiveScreenHeight(5),
        resizeMode: "center"
    },
    timerContainer: {
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(4),
        backgroundColor: Colors.Black,
        marginRight: responsiveScreenWidth(5),
        borderRadius: responsiveScreenWidth(2)
    }
})