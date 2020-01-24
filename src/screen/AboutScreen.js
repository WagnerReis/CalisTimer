import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

const AboutScreen = props => {
    const back = () => {
        props.navigation.goBack()
    }
    const openURL = url => () => {
        Linking.openURL(url)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo} >CalisTimer</Text>
            <Text style={styles.description}>Este aplicativo foi construido durante as aulas do curso de React/React-Native do DevPleno, o devReactJS nos módulos de react-native.</Text>
            <TouchableOpacity onPress={openURL('https://devpleno.com')}>
                <Image style={{ width: 230, height: 200 }} source={require('../../assets/DevPleno.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openURL('https://devpleno.com/devreactjs')}>
                <Image style={{ width: 190, height: 80, marginBottom: 80 }} source={require('../../assets/DevReactJS.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={back}>
                <Image style={{ marginBottom: 30 }} source={require('../../assets/back.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    logo: {
        fontFamily: 'Ubuntu-bold',
        fontSize: 48,
        textAlign: 'center',
        color: 'white',
        marginTop: 111,
        marginBottom: 111
    },

    description: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: 'white',
        margin: 20
    }
})

AboutScreen.navigationOptions = {
    headerShown: false
}

export default AboutScreen