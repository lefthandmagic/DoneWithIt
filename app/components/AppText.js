import { Text, StyleSheet, Platform } from 'react-native';

import React from 'react';

function AppText({children, style}) {
    return (
        <Text style={[styles.textStyle, style]}>{children}</Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: Platform.os === "android"? 'Roboto' : 'Avenir',
        fontSize: 20
    }
    
})