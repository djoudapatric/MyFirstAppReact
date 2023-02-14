import React from "react";
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';
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
     backgroundColor:'blue',
    },
});