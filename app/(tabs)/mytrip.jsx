import { View, Text, Button } from 'react-native'
import React from 'react'
import ChildB from '../../components/ChildB'
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Counter from '../../components/Counter';
export default function mytrip() {
  const router=useRouter()
  return (
    <View style={{margin:40}}>
        {/* <ChildB title="apple" des="tree"/> */}
        <Button title="Start a trip" onPress={()=>router.navigate("../discover")}/>
        <Counter/>
    </View>
  );
};