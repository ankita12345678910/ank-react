import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ButtonCom(apple) {
    return (
        <View>
            <Text onClick={apple.onClick}>{apple.val}</Text>
        </View>
    )
}