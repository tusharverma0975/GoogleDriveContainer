import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const design = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:30,
    backgroundColor:'white',
    elevation:20,
    paddingHorizontal: 10


    } ,
    innerData:{
    flexDirection: 'row',
    justifyContent:'space-between',
    // backgroundColor:'red',
    width:'100%',
    // height:'100%'
    paddingHorizontal:20,
    },
    headerText:{
        fontSize: 20,
        fontWeight: '600',
        color:'black',

    },
    button:{
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 20,
        right: 15,
        
    }

});

export default design;
