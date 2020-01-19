import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Select from '../components/Select'
import Title from '../components/Title'

const EMOMScreen = props => {
    return (
            <View style={styles.container}>
                <Title title='EMOM' subTitle='Every Minute On the Minute'/>
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
        paddingTop: 200
    }
})

export default EMOMScreen