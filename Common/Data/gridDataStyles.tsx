import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DesignGrid= StyleSheet.create({
    listContainer:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        // height:'60%',
        // width: '60%'
        paddingVertical: 20,
    },
    textCard:{

    },
    itemGrid:{
       fontSize: 12,
       backgroundColor: 'white',
       margin:5,
       padding: 5,
       width: 200,
       height: 120,
       borderRadius: 20
       
    }

});

export default DesignGrid