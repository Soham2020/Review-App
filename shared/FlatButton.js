import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FlatButton (props) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonTxt}>{ props.title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingVertical: 10,
        backgroundColor: '#6495ed',
    },
    buttonTxt: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});