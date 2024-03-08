import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

import MyStallItem from './MyStallItem';

export default function MyStall() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <MyStallItem
                    image={require("../../assets/ApplicationImage/ProductPage/food2.jpg")}
                    name={"Burger"}
                    price={"৳ 60"} />
                <MyStallItem
                    image={require("../../assets/ApplicationImage/ProductPage/food1.jpg")}
                    name={"Chicken Patty Burger"}
                    price={"৳ 600"} />
                <MyStallItem
                    image={require("../../assets/ApplicationImage/ProductPage/food3.jpg")}
                    name={"Chicken Patty Burger"}
                    price={"৳ 120"} />
                <View style={{ paddingBottom: responsiveScreenHeight(16) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
})