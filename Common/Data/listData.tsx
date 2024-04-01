import { View, Text } from 'react-native';
import React from 'react';
import listDataStyles from './listDataStyles'; // Assuming you have styles defined here
import design from './listDataStyles';

const ListData = () => {
  return (
    <>
      <View style={listDataStyles.listContainer}>
        <Text style={design.textCard}>listData</Text>
      </View>
      <View style={listDataStyles.listContainer}>
      <Text style={design.textCard}>listData</Text>
      </View>
      <View style={listDataStyles.listContainer}>
      <Text style={design.textCard}>listData</Text>
      </View>
      <View style={listDataStyles.listContainer}>
      <Text style={design.textCard}>listData</Text>
      </View>
    </ >

    
  );
};

export default ListData;
