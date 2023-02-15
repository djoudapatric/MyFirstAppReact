import React from "react";
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import { TextInput } from "react-native";
import { Octicons } from '@expo/vector-icons';


export default function SearchBar(){
    return (
        <View style = {styles.searchBar}>
        <TouchableOpacity style = {styles.iconSearch}>
          <Octicons name="search" size={30} color="black" />
        </TouchableOpacity>
        <TextInput placeholder= "Search"/>
      </View>
    );
    
}
const styles = StyleSheet.create({
    searchBar: {
     borderWidth:1,
     marginHorizontal:20,
     paddingHorizontal:100,
     paddingVertical:10,
     flexDirection:'row',
     backgroundColor:'white',
     borderRadius:20,
     
    },
    iconSearch:{
      
    } 
});