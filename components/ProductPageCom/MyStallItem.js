import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Switch } from 'react-native-switch';

import Colors from '../../constant/Colors';
import CustomeFonts from '../../constant/CustomeFonts';

export default function MyStallItem({ image, name, price }) {
    const [orderStatus, setOrderStatus] = React.useState(false)
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.productDetailsContainer}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>{price}</Text>
            </View>
            <View style={styles.swithContainer}>
                <Switch
                    value={orderStatus}
                    onValueChange={() => setOrderStatus(state => !state)}
                    circleSize={22}
                    barHeight={22}
                    circleBorderWidth={2}
                    backgroundActive={Colors.Black}
                    backgroundInactive={Colors.Black4}
                    circleActiveColor={Colors.Yellow}
                    circleInActiveColor={Colors.Red}
                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                    renderActiveText={true}
                    renderInActiveText={true}
                    activeText={'On'}
                    inActiveText={'Off'}
                    switchWidthMultiplier={2.8}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "96%",
        backgroundColor: "white",
        alignSelf: "center",
        height: responsiveScreenHeight(9),
        flexDirection: "row",
        elevation: 8,
        marginBottom: responsiveScreenHeight(1)

    },
    image: {
        width: responsiveScreenHeight(9),
        height: responsiveScreenHeight(9),
        resizeMode: "cover",

    },
    productDetailsContainer: {
        justifyContent: "center",
        marginLeft: responsiveScreenWidth(3),
        width: responsiveScreenWidth(55)
    },
    productName: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
        marginBottom: responsiveScreenHeight(0.5),
        color: Colors.Black3
    },
    productPrice: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2),
    },
    swithContainer: {
        justifyContent: "center"
    }
})