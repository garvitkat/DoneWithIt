import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors'

export default function Welcome() {
    return (
        <ImageBackground source={require("../assets/background.jpg")}
        style={styles.welcomeScreen}>
            <View style={styles.logoAndText}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo}></Image>
            <Text>Buy and Sell</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    welcomeScreen:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    loginButton:{
        height:"11%",
        width:"100%",
        backgroundColor:colors.primary,
    },
    registerButton:{
        height:"11%",
        width:"100%",
        backgroundColor:colors.secondary,
    },
    logoAndText:{
        position:"absolute",
        top:50,
        alignItems:"center"
    },
    logo:{
        width:100,
        height:100,
        marginBottom:8,
    },
    
})
