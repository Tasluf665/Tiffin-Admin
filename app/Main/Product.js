import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

import Colors from '../../constant/Colors';
import TopBar from '../../components/common/TopBar'
import TabBar from '../../components/common/TabBar';
import MyStall from '../../components/ProductPageCom/MyStall';
import AddProduct from '../../components/ProductPageCom/AddProduct';

export default function Product() {
    const [select, setSelect] = React.useState(true)

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.tabContainer}>
                <TabBar select={select} setSelect={setSelect} btn1={"My Stall"} btn2={"+ add product"} />
            </View>

            {select ? <MyStall /> : <AddProduct />}

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