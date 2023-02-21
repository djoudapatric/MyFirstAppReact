import React from "react";
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import { TextInput } from "react-native";
import { Octicons } from '@expo/vector-icons';


export default function SearchBar(){
    return (
        <View style = {styles.searchBar}>
        <TouchableOpacity style = {styles.iconSearch}>
          <Octicons name="search" size={40} color="black" />
        </TouchableOpacity>
        <TextInput style = {styles.search} placeholder= "Search"/>
      </View>
    );
    
}
const styles = StyleSheet.create({
    searchBar: {
     borderColor:'grey',
     borderWidth:1,
     marginHorizontal:20,
     flexDirection:'row',
     backgroundColor:'white',
     borderRadius:10,
     width:390,
     height:40,
     marginTop:10
    },
    iconSearch:{
      
    },
    search:{
      marginHorizontal:20,
      borderRadius:20,
      borderWidth:0,
    }
});