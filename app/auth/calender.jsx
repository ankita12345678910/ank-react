import { View, Text } from 'react-native'
import React from 'react'
import CalendarPicker from "react-native-calendar-picker";

export default function calender() {
  return (
    <View>
      <Text>Calender</Text>
      <CalendarPicker onDateChange={this.onDateChange} />
    </View>
  )
}