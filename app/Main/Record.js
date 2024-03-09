import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import TopBar from '../../components/common/TopBar'
import TabBar from '../../components/common/TabBar';
import Colors from '../../constant/Colors';
import Payment from '../../components/RecordPageCom/Payment';
import Report from '../../components/RecordPageCom/Report';

export default function Record() {
    const [select, setSelect] = React.useState(true)
    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.tabContainer}>
                <TabBar select={select} setSelect={setSelect} btn1={"Sells Report"} btn2={"Payment"} />
            </View>

            {select ? <Report /> : <Payment />}
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
})