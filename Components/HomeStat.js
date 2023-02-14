
import React from "react";
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function HomeStat(){
    return (
        <View style = {styles.homeStat}>
            {/*Start Stat*/}
            <View style= {styles.stat}>
                <View style = {styles.statValue}>
                    <Text style = {styles.textValue}>12</Text>
                    <View style = {styles.percentage}>
                        <Text><AntDesign name="arrowup" size={16} color="green" />2%<Text> today</Text></Text>
                    </View>
                </View>  
                    <Text style = {styles.statLabel}>Patient Appointments</Text>
            </View>
                <TouchableOpacity style={styles.icon}><Ionicons name="md-add-circle" size={32} color="black" /></TouchableOpacity>
            {/*End Stat*/}
        </View>
    )
}
const styles = StyleSheet.create({
         homeStat: {
          borderWidth:1,
          borderColor:'red',
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
