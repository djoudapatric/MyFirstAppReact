import React from "react";
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Cards(){
    return(
        <View style = {styles.card}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity style = {styles.iconWrite}>
              <Octicons name="pencil" size={30} color="black" />
            </TouchableOpacity>
            <Text style = {styles.cardName}>
                Write Prescription
            </Text>
            <Text style = {styles.cardDesc}>
                To patient
            </Text>
          </View>
          <View style = {styles.cardAction}>
            <Text style = {styles.cardType}>
               TEMPLATE
            </Text>
            <TouchableOpacity style = {styles.iconNext}>
               <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View> 
    )
}
const styles = StyleSheet.create({
    card: {
     backgroundColor:'yellow',
     borderRadius:27,
     marginTop:30,
     marginBottom:160,
     marginLeft:15,
     width:150,
     
    },
    iconWrite:{
      
    },
    cardAction:{
      justifyContent:'space-between',
      flexDirection:'row',
      paddingVertical:35
    },
    cardName:{
      justifyContent:'center'
    }
});