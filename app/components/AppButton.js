import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../config/colors'

function AppButton({title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        width:'100%',
        marginVertical: 10
    },
    textStyle: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})