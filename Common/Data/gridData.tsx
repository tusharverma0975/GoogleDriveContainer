import { View, Text } from 'react-native'
import React from 'react'
import DesignGrid from './gridDataStyles'
const GridData = () => {
  return (
   <View style={DesignGrid.listContainer}> 
    <Text style={DesignGrid.itemGrid }> Image 1</Text>
    <Text style={DesignGrid.itemGrid }> Image 1</Text>
    <Text style={DesignGrid.itemGrid }> Image 1</Text>
    <Text style={DesignGrid.itemGrid }> Image 1</Text>
    <Text style={DesignGrid.itemGrid }> Image 1</Text>
   </View>
 
  )
}

export default GridData