import { View, Text } from 'react-native'
import React from 'react'

export default function ChildA(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <h1>{props.des}</h1>
    </View>
  )
} 