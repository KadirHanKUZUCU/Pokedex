import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './PokedexCard.style';

const PokedexCard = ({pokedex}) => {
  return (
    <SafeAreaView style={styles.pokedexContainer}>
      <Image style={styles.pokedexImage} source={{uri: pokedex.imgURL}} />
      <Text style={styles.pokedexNo}>{pokedex.pokedexNo}</Text>
      <Text style={styles.pokedexTitle}>{pokedex.title}</Text>
      <Text style={styles.pokedexBuild}>{pokedex.build}</Text>
    </SafeAreaView>
  );
};
export default PokedexCard;
