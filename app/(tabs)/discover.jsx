import { View, Text, useColorScheme, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { SelectTravelList } from '../../constants/Options';
import OptionCard from '../../components/OptionCard';
import { CreateTripContext } from './../../context/CreateTripContext';


export default function Discover() { // Component name should start with uppercase
  const isDarkMode = useColorScheme() === 'dark';
  const [selectTraveller, setSelectTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    console.log("ggggg", selectTraveller)
    setTripData({
      ...tripData,
      travelerCount: selectTraveller
    })
  }, [selectTraveller]);
  useEffect(() => {
    console.log(tripData)
  }, [tripData]);
  return (
    <View>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Hello world
      </Text>
      <FlatList data={SelectTravelList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => { setSelectTraveller(item) }}
            style={{ marginVertical: 10 }}>
            <OptionCard option={item} selectTraveller={selectTraveller} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: "#FFFFFF",
  },
  blackText: {
    color: "#000000",
  },
});