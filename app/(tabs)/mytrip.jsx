import { View, Text } from 'react-native'
import React from 'react'
import ChildB from '../../components/ChildB'
export default function mytrip() {
  return (
    <View style={{margin:40}}>
        <ChildB title="apple" des="tree"/>
    </View>
  );
};