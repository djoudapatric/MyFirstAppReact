import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from './Components/TopBar';
import HomeStat from './Components/HomeStat';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/*Start TopBar*/}
      <TopBar></TopBar>
      {/*End TopBar*/}
    
      {/*Start HomeStat*/}
      <HomeStat></HomeStat>
      {/*End HomeStat*/}
     
      {/*Start Search bar*/}
      <SearchBar></SearchBar>
      {/*End Search bar*/}

      {/*Start scrollViews*/}
      <ScrollView style = {styles.Cards} horizontal = {true}>
        <Cards></Cards> 
      </ScrollView>
      {/*End scrollViews*/}
      <View style = {styles.statistique}>
        
      </View>
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
});
