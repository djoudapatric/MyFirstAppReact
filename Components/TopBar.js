import React from "react";
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TopBar(){
    return (  
        <View style = {styles.topbar}>
                {/*Start Top bar*/}
                <TouchableOpacity style = {styles.topbarbutton}><FontAwesome5 name="toolbox" size={40} color="black" /></TouchableOpacity>
                <TouchableOpacity style = {styles.topbarbutton}><MaterialCommunityIcons name="bell-ring" size={40} color="black" /></TouchableOpacity>
                {/*End Top bar*/}
        </View>  
    )
    
    }
    const styles = StyleSheet.create({
        topbar: {
          border:1,
          paddingHorizontal:24,
          paddingVertical:16,
          flexDirection:'row',
          width:"100%",
          justifyContent:'space-between',
        },
        topbarbutton: {
          paddingHorizontal:8,
          paddingVertical:10,
          width: 55,
          height: 60,
          backgroundColor:'white',
          borderRadius: 13
        },
    });
    