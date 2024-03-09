import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'


import Title from './Title'
import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts'
import PaymentItem from './PaymentItem'

export default function Payment() {
    return (
        <View>
            <Title title={"(April 04-27) Payment History..."} color={Colors.Blue} />
            <ScrollView>
                <PaymentItem
                    totalOrder={20}
                    cancelled={2}
                    returned={3}
                    delivered={15}
                    totalSell={2750}
                    date={"23-12-2024"}
                    paid={2500}
                    due={250}
                />
                <PaymentItem
                    totalOrder={20}
                    cancelled={2}
                    returned={3}
                    delivered={15}
                    totalSell={2750}
                    date={"23-12-2024"}
                    paid={2500}
                    due={0}
                />
                <View style={{ paddingBottom: responsiveScreenHeight(20) }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})