import { View, Text, Button } from 'react-native'
import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter() {
    const { count, increment, decrement, reset } = useCounter(0)
    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 48, fontWeight: 'bold' }}>{count}</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Button title="Increment" onPress={increment} />
                <Button title="Decrement" onPress={decrement} />
                <Button title="Reset" onPress={reset} />
            </View>
        </View>
    );
}   