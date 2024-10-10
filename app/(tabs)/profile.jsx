import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
// import CalendarPicker from 'react-native-calendar-picker';


export default function profile() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("count is   " + count);
  }, [count])
  return (
    <View>
      <Text>profile</Text>
      <Button title="Increment" onPress={increment}></Button>
      {/* <CalendarPicker onDateChange={this.onDateChange} /> */}

    </View>
  )
}