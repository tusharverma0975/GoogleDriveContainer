// DriveGridContainer.js
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MenuIcon from '../../Assets/menuIcon.svg'; 
import design from './DriveContainerStyles';
import GridIcon from '../../Assets/gridIcon.svg'; 
import NotificationIcon from '../../Assets/notificationIcon.svg'; 
import ListIcon from '../../Assets/listIcon.svg'

const DriveGridContainer = ({ toggleViewMode, isGridMode }:any ) => {
  return (
    <View style={design.headerContainer}>
      <TouchableOpacity >
        <MenuIcon />
      </TouchableOpacity>
      <View style={design.innerData} > 
      <View >
        <Text style={design.headerText}> Drive </Text>
      </View>
      <View style={design.button}> 
      <TouchableOpacity onPress={toggleViewMode}>
            {isGridMode ? <ListIcon /> : <GridIcon />}
          </TouchableOpacity>
        <NotificationIcon />
      </View>
    </View>
    </View>
  );
};

export default DriveGridContainer;
