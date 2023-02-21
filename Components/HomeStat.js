
import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function HomeStat(){
    return (
        <View style = {styles.homeStat}>
            {/*Start Stat*/}
            <View style= {styles.stat}>
                <View style = {styles.statValue}>
                    <Text style = {styles.textValue}>12</Text>
                    <View style = {styles.percentage}>
                        <Text ><AntDesign name="arrowup" size={20} color="green" />2%<Text> today</Text></Text>
                    </View>
                </View>  
                    <Text style = {styles.statLabel}>Patient Appointments</Text>
            </View>
                <TouchableOpacity style={styles.iconAdd}><Ionicons name="md-add-circle" size={70} color="black" /></TouchableOpacity>
            {/*End Stat*/}
        </View>
    );
}
const styles = StyleSheet.create({
        homeStat: {
            flexDirection:'row',
            justifyContent:'space-between',
            width:"100%",
            marginLeft:15,
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
            backgroundColor:'white',
            borderRadius:15,     
        },
        statValue:{
            flexDirection:'row',
        },
        iconAdd:{
            width: 100,
            paddingVertical:30,
        }
});
