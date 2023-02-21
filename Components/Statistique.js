import React from "react";
import { StyleSheet,View,Text,Image } from 'react-native';
//import { Image } from "./assets/images";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function TopBar(){
    return (        
        <View style = {styles.statistique}>
            <View style = {styles.statPatient}>
                 <Text style = {styles.patient}>Patient statistics</Text>
            </View>
            <View style= {styles.statis}>
            <View style= {styles.stat2}>
                <View style = {styles.statValue}>
                    <Text style = {styles.textValue}>12</Text>
                    <View style = {styles.percentage}>
                        <Text ><AntDesign name="arrowup" size={20} color="green" />2%<Text> today</Text></Text>
                    </View>
                </View>  
                    <Text style = {styles.statLabel}>New patients</Text>
            </View>
            <View style= {styles.stat2}>
                <View style = {styles.statValue}>
                    <Text style = {styles.textValue}>24</Text>
                    <View style = {styles.graph_insurance}>
                    <Foundation name="graph-bar" size={24} color="black" />
                    </View>
                </View>  
                    <Text style = {styles.statLabel}>Insurance patients</Text>
            </View>
            </View>
            <Image source={require('../assets/images/demo.gif')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    statistique: {
      backgroundColor:'white',
      borderRadius:15,
      width:480,
      paddingBottom:20,
      marginTop:20
      
    },
    patient:{
      marginLeft:30,
    },
    statis:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    textValue:{
        fontSize:60,
    },
    percentage:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginLeft:15,
        height:30,
        backgroundColor:'grey',
        borderRadius:15,     
    },
    statValue:{
        flexDirection:'row',
    },
    iconAdd:{
        width: 100,
        paddingVertical:30,
    },
    stat2:{
       marginRight:30
    },
    graph_insurance:{
        marginTop:30,
        marginLeft:15,
        height:30,
    }
});
