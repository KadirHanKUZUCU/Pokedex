import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import PokedexCard from './PokedexCard';
import pokedex_data from './pokedex_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.appTitle}>PokeDex</Text>
      <View style={styles.separator} />
      <View>
      <FlatList style={styles.flatlist}
      numColumns={2}
      data={pokedex_data}
      renderItem={({item}) => <PokedexCard pokedex={item}/> }
      />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  mainContainer:{
    margin:10,
  },
  appTitle:{
    fontSize:17,
    fontWeight:'bold',
  },
  separator: {
    margin:-10,
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flatlist:{
    marginBottom:80
  }

});
