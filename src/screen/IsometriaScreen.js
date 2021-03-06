import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import Sound from 'react-native-sound'
import KeepAwake from 'react-native-keep-awake'

import Select from '../components/Select'
import Title from '../components/Title'
import Time from '../components/Time'
import ProgressBar from '../components/ProgressBar'
import BackgroundProgress from '../components/BackgroundProgress'

const alert = require('../../assets/sounds/alert.wav')

class IsometriaScreen extends Component {
    state = {
        keyboardIsVisible: false,

        goal: 1,
        countdown: 1,
        time: '20',

        isRunning: false,
        paused: false,
        countdownValue: 0,
        count: 0
    }
    componentDidMount() {
        Sound.setCategory('Playback', true)
        this.alert = new Sound(alert)

        this.kbShow = Keyboard.addListener('keyboardWillShow', () => {
            this.setState({ keyboardIsVisible: true })
        })
        this.kbHide = Keyboard.addListener('keyboardWillHide', () => {
            this.setState({ keyboardIsVisible: false })
        })
    }
    componentWillUnmount() {
        this.kbShow.remove()
        this.kbHide.remove()
    }

    playAlert = () => {
        const { count, time } = this.state
        if (count >= parseInt(time) - 5 && count <= parseInt(time)) {
            this.alert.play()
        }
    }

    back = () => {
        if (this.state.paused || !this.state.isRunning) {
            clearInterval(this.countTimer)
            clearInterval(this.countdownTimer)
            this.props.navigation.goBack()
        }
    }

    restart = () => {
        if (this.state.paused) {
            clearInterval(this.countTimer)
            clearInterval(this.countdownTimer)
            this.play()
        }
    }

    stop = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

    play = () => {
        const time = this.state.goal === 0 ? '0' : this.state.time
        this.setState({
            count: 0,
            countdownValue: 5,
            paused: false,
            time
        })
        this.setState({ isRunning: true })
        const count = () => {
            if (this.state.paused) {
                return;
            }
            this.setState({ count: this.state.count + 1 }, () => {
                this.playAlert()
            })
        }

        this.alert.play()
        this.countdownTimer = setInterval(() => {
            if (this.state.paused) {
                return;
            }
            this.alert.play()
            this.setState({ countdownValue: this.state.countdownValue - 1 }, () => {
                if (this.state.countdownValue === 0) {
                    clearInterval(this.countdownTimer)
                    this.countTimer = setInterval(count, 1000)
                }
            })
        }, 1000)
    }

    render() {
        if (this.state.isRunning) {
            const percMinute = this.state.time === '0' ? 0 : parseInt(((this.state.count) / parseInt(this.state.time)) * 100)
            const restante = parseInt(this.state.time) >= this.state.count ? parseInt(this.state.time) - this.state.count : 0
            const opacity = !this.state.paused ? 0.6 : 1
            return (
                <BackgroundProgress percentage={percMinute}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <KeepAwake />
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Title title='Isometria' style={{ paddingTop: this.state.keyboardIsVisible ? 20 : 100 }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Time time={this.state.count} />
                            {
                                this.state.goal === 1 ? <Time time={restante} type='text2' appendedText={' restantes'} /> : null
                            }
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            {
                                this.state.countdownValue > 0 ?
                                    <Text style={styles.countdown}>{this.state.countdownValue}</Text>
                                    : null
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 40 }}>
                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.back} >
                                    <Image style={{ opacity }} source={require('../../assets/back.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.stop} >
                                    {
                                        this.state.paused ?
                                            <Image source={require('../../assets/btn-play.png')} />
                                            :
                                            <Image source={require('../../assets/btn-stop.png')} />
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.restart} >
                                    <Image style={{ opacity }} source={require('../../assets/reload.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </BackgroundProgress>
            )
        }
        const behavior = Platform.OS !== 'ios' ? 'height' : 'padding'
        const paddingTop = Platform.OS === 'ios' ? this.state.keyboardIsVisible ? 20 : 200 : 100
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior}>
                <ScrollView style={styles.container} >
                    <Title title='Isometria' style={{ paddingTop }} />
                    <Image style={{ alignSelf: 'center', marginBottom: 17 }} source={require('../../assets/settings-cog.png')} />
                    <Select
                        label={'Objetivo:'}
                        current={this.state.goal}
                        options={[
                            {
                                id: 0,
                                label: 'livre'
                            },
                            {
                                id: 1,
                                label: 'bater tempo'
                            }]}
                        onSelect={opt => this.setState({ goal: opt })}
                    />

                    {this.state.goal !== 0 ?
                        <>
                            <Text style={styles.label}>Quantos segundos:</Text>
                            <TextInput style={styles.input} keyboardType='numeric' value={this.state.time} onChangeText={text => this.setState({ time: text })} />
                        </>
                        : null
                    }

                    {
                        this.state.goal !== 0 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 185 }}>
                                <TouchableOpacity style={{ flex: 1, alignSelf: 'center', paddingLeft: 20 }} onPress={this.back} >
                                    <Image source={require('../../assets/back.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginTop: 14, paddingRight: 110 }} onPress={this.play} >
                                    <Image source={require('../../assets/btn-play.png')} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 290 }}>
                                <TouchableOpacity style={{ flex: 1, alignSelf: 'center', paddingLeft: 20 }} onPress={this.back} >
                                    <Image source={require('../../assets/back.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flex: 1, alignSelf: 'center', marginTop: 14, paddingRight: 110 }} onPress={this.play} >
                                    <Image source={require('../../assets/btn-play.png')} />
                                </TouchableOpacity>
                            </View>

                    }
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

IsometriaScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A',
        paddingTop: 120
    },

    container2: {
        flex: 1,
        backgroundColor: '#D6304A'
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
    },

    countdown: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 144,
        color: 'white',
        textAlign: 'center',
    },
})

export default IsometriaScreen