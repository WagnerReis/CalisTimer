import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'

import Select from '../components/Select'
import Title from '../components/Title'

const EMOMScreen = props => {
    return (
        <View style={styles.container}>
            <Title title='EMOM' subTitle='Every Minute On the Minute' />
            <Image style={{ alignSelf: 'center', marginBottom: 17 }} source={require('../../assets/settings-cog.png')} />
            <Select
                label={'Alertas:'}
                current={0}
                options={[
                    {
                        id: 0,
                        label: 'Desligado'
                    },
                    {
                        id: 15,
                        label: '15s'
                    },
                    {
                        id: 30,
                        label: '30s'
                    },
                    {
                        if: 45,
                        label: '45s'
                    }]}
                onSelect={opt => console.log('Selecionado', opt)}
            />
            <Select
                label={'Contagem regressiva:'}
                current={0}
                options={[
                    {
                        id: 1,
                        label: 'Sim'
                    },
                    {
                        id: 0,
                        label: 'Não'
                    }]}
                onSelect={opt => console.log('Selecionado', opt)}
            />
            <Text style={styles.label}>Quantos minutos:</Text>
            <TextInput style={styles.input} keyboardType='numeric' value='15' />
            <Text style={styles.label}>minutos</Text>
            <Image style={{ alignSelf: 'center', marginTop: 14}} source={require('../../assets/btn-play.png')} />
            <Text>Testar</Text>
        </View>
    )
}

EMOMScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A',
        padding: 20,
        paddingTop: 10
    },

    label: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },

    input: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 48
    }
})

export default EMOMScreen