import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors';

import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground
        style = {styles.background}
        blurRadius={10}
        source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo}
            source={require('../assets/logo-red.png')} />
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Login" />
            <AppButton title="register" color="secondary" />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding:20,
        width:"100%"
    },
    logo: {
        width:100,
        height:100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontStyle: "italic",
        fontSize:25,
        fontWeight: "600",
        paddingVertical: 20,
    },
})

export default WelcomeScreen;