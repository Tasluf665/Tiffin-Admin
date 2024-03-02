import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";

import TopBar from '../../components/common/TopBar'
import Colors from '../../constant/Colors';

export default function Product() {
    return (
        <View style={styles.container}>
            <TopBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: Colors.BackgroundColor_Gray,
    }
})