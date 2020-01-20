import React from 'react'
import { View } from 'react-native'

const ProgressBar = props => {
    const { color, percentage, heigth } = props
    return(
        <View>
            <View style={{ 
                width: percentage ? percentage+'%' : '1%', 
                backgroundColor: color ? color : 'white', 
                height: heigth ? heigth : 3 }}/>
        </View>
    )
}

export default ProgressBar