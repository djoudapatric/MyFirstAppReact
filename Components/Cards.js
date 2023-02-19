import React from "react";
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Cards(){
    return(
      <View style = {styles.Cards}>
        <View style = {styles.card1}>
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
               <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View> 
        <View style = {styles.card2}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity style = {styles.iconWrite}>
              <Octicons name="pencil" size={30} color="black" />
            </TouchableOpacity>
            <Text style = {styles.cardName}>
                Anna jonhson
            </Text>
            <Text style = {styles.cardDesc}>
                Continue to fillsdfasdad
                patient profile
            </Text>
          </View>
          
          <View style = {styles.cardAction}>
            <Text style = {styles.cardType}>
               REMINDER
            </Text>
            <TouchableOpacity style = {styles.iconNext}>
               <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View> 
      </View> 
    )
}
const styles = StyleSheet.create({
    Cards:{
     flexDirection:'row',
     justifyContent:'space-between',
     
    },
    card1: {
     backgroundColor:'green',
     borderRadius:27,
     marginBottom:300,
     marginTop:30,
     marginLeft:15,
     width:280,
     
    },
    card2: {
      backgroundColor:'blue',
      borderRadius:27,
      marginTop:30,
      marginBottom:300,
      marginLeft:15,
      width:280,
      
     },
    iconWrite:{
      marginBottom:70,
      marginLeft:15,
      
      
    },
    cardAction:{
      justifyContent:'space-between',
      flexDirection:'row',
      paddingVertical:90,
      marginLeft:15,
      marginBottom:50
    },
    cardName:{
      justifyContent:'center',
      fontSize:30,
    },
    cardHeader:{
      marginLeft:15,
    },
    iconNext:{
      backgroundColor:'black',
      borderRadius:40,
      width:40
    }
});