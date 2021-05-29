
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card({title, subtitle, image}) {
    return (
    <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detail}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subtitle}</AppText>
        </View> 
    </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom:20,
        overflow: 'hidden'
    },
    detail: {
        padding:20,
    },
    image: {
        width:'100%',
        height:200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom:7
    }
})