import { View, Text, Button } from 'react-native';
import React from 'react';

export default function ChildB({ title, des, sendDataToParent }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{des}</Text>
      <Button title="Send Data to Parent" onPress={() => sendDataToParent(title)} />
    </View>
  );
}
