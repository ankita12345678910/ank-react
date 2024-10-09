import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({ option, selectTraveller }) {
    return (
        <View style={[{
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'gray',
            borderRadius: 15
        }, selectTraveller?.id == option?.id && { borderWidth: 3 }]}>
            <View>
                <Text>{option.title}</Text>
                <Text>{option.desc}</Text>
                <Text style={{ fontSize: 30 }}>{option.icon}</Text>
            </View>

        </View>
    )
}