import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import * as ImagePicker from 'expo-image-picker';

import Colors from '../../constant/Colors'
import CustomeFonts from '../../constant/CustomeFonts';
import CustomeButton from '../common/CustomeButton';

export default function AddProduct() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../assets/ApplicationImage/ProductPage/handIcon.png")}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.text}>+ add a New Product</Text>
            </View>

            <View style={styles.inputField}>
                <Text style={styles.name}>Product Name</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(name) => {
                        setName(name);
                    }}
                    value={name}
                />
            </View>

            <View style={styles.inputField}>
                <Text style={styles.name}>Price</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(price) => {
                        setPrice(price);
                    }}
                    value={price}
                />
            </View>


            {image ?
                <View>
                    <Image source={{ uri: image }} style={styles.imagePicker} />
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => { setImage(null) }}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                </View> :
                <TouchableOpacity activeOpacity={0.8} style={styles.imagePicker} onPress={pickImage}>
                    <Image
                        source={require("../../assets/ApplicationImage/ProductPage/productAdd.png")}
                        style={styles.addIcon}
                    />
                    <Text style={styles.iconText}>add photo</Text>
                </TouchableOpacity>
            }


            <CustomeButton
                title="+ add"
                style={{
                    backgroundColor: Colors.pink,
                    marginTop: responsiveScreenHeight(4),
                    alignSelf: "center",
                    width: responsiveScreenWidth(85)
                }}
                onPress={() => { }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(100),
        marginTop: responsiveScreenHeight(2),
    },
    barContainer: {
        width: responsiveScreenWidth(85),
        backgroundColor: Colors.White,
        paddingVertical: responsiveScreenHeight(0.8),
        paddingHorizontal: responsiveScreenWidth(2),
        alignSelf: "center",
        position: "relative",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        backgroundColor: Colors.Black5,
        left: responsiveScreenWidth(-1.8),
        top: responsiveScreenHeight(-0.7),
        borderRadius: responsiveScreenWidth(12),
        justifyContent: "center",
    },
    logo: {
        width: "auto",
        height: "85%",
        resizeMode: "contain",
    },
    text: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2)
    },

    inputField: {
        width: responsiveScreenWidth(85),
        alignSelf: "center",
        marginTop: responsiveScreenHeight(3)
    },
    name: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        fontSize: responsiveScreenFontSize(2)
    },
    textInput: {
        width: responsiveScreenWidth(85),
        backgroundColor: Colors.White,
        fontSize: responsiveScreenFontSize(1.8),
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(0.5),
        marginTop: responsiveScreenHeight(1)
    },
    imagePicker: {
        width: responsiveScreenWidth(43),
        height: responsiveScreenHeight(18),
        backgroundColor: Colors.White,
        alignSelf: "center",
        marginTop: responsiveScreenHeight(5),
        borderWidth: 1,
        borderColor: Colors.Black4,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: responsiveScreenWidth(3)
    },
    addIcon: {
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        resizeMode: "center"
    },
    iconText: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
    },

    cancelBtn: {
        alignSelf: "center",
        marginTop: responsiveScreenHeight(1),
    },
    cancel: {
        fontFamily: CustomeFonts.Segoe_UI_Bold,
        color: Colors.Red
    }
})