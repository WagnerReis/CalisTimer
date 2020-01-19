import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center'
    }
})

export default Button