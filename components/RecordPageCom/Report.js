import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'
import Title from './Title'
import TableRow from './TableRow'

export default function Report() {
    return (
        <View style={styles.container}>
            <Title title={"(April 04-27) Sells Report..."} color={Colors.Red} />
            <ScrollView>
                <View style={styles.tableContainer}>
                    <TableRow
                        col1={"Item"}
                        col2={"Qty"}
                        col3={"Sell"}
                        backgroundColor={Colors.Green2}
                        textColor={Colors.White}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />
                    <TableRow
                        col1={"Patty Burger"}
                        col2={65}
                        col3={2345}
                    />

                    <View style={{ ...styles.totalContainer }}>
                        <Text style={{ ...styles.heading }}>Total: 73455</Text>
                    </View>

                    <View style={{ paddingBottom: responsiveScreenHeight(20) }}></View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    tableContainer: {
        width: responsiveScreenWidth(96),
        alignSelf: "center",
        marginTop: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(0.8),
    },

    totalContainer: {
        width: responsiveScreenWidth(51),
        height: responsiveScreenHeight(4),
        backgroundColor: Colors.Red,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end"
    },
    heading: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        color: Colors.White,
        fontSize: responsiveScreenFontSize(1.8),
    }


})