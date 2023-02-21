import React from "react";
import {StyleSheet,View,TouchableOpacity,Text,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Cards(){
    return(
      
        
      <View style = {styles.Cards}>
        <View style = {styles.card1}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity style = {styles.iconWrite}>
            <MaterialCommunityIcons name="pencil-circle" size={40} color="white" />
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
            <Ionicons name="arrow-forward-circle" size={50} color="black" />
                        </TouchableOpacity>
          </View>
        </View> 
        <View style = {styles.card2}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity style = {styles.iconWrite}>
              {/* <Image source={require('../assets/images/image_femme.jpg')}/> */}
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
     marginTop:30,
     marginLeft:15,
     width:280,
     
    },
    card2: {
      backgroundColor:'blue',
      borderRadius:27,
      marginTop:30,
      marginLeft:15,
      width:280,
    },  
    iconWrite:{
      width:48,
      height:48,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
    },
    
    cardAction:{
      justifyContent:'space-between',
      flexDirection:'row',
      paddingVertical:100,
      marginLeft:15,
    },
    cardName:{
      justifyContent:'center',
      fontSize:30,
    },
    cardHeader:{
      marginLeft:15,
    },
    iconNext:{
       paddingLeft:20,
       
    }
});