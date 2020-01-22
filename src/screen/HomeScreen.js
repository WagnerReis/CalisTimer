import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Button from '../components/Button'

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo} >CalisTimer</Text>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>AMRAP</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('Isometria')}>Isometria</Button>
        </View>
    )
}
HomeScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: '#D6304A' 
    },

    logo: {
        fontFamily: 'Ubuntu-bold',
        fontSize: 48,
        textAlign: 'center',
        color: 'white',
        marginTop: 111, 
        marginBottom: 111
    },

    btn: {
        padding: 20
    }
})

export default HomeScreen