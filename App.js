import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import TopBar from './Components/TopBar';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-web';
import HomeStat from './Components/HomeStat';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBar></TopBar>
      <HomeStat></HomeStat>
      {/*Start Search bar*/}
      <View style = {styles.searchBar}>
        <TouchableOpacity style = {styles.iconSearch}>
          <Octicons name="search" size={30} color="black" />
        </TouchableOpacity>
        <TextInput placeholder= "Search"/>
      </View>
      {/*End Search bar*/}

      {/*Start scrollViews*/}
      <ScrollView style = {styles.Cards} horizontal = {true}>
        <View style = {styles.card}>
          <View style = {styles.cardHeader}>
            <TouchableOpacity style = {styles.iconWrite}>
              <Octicons name="pencil" size={24} color="black" />
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'left',
    justifyContent: 'top',
  },
  topbar: {
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
