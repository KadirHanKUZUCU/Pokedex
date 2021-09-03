import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    pokedexContainer:{
        flex:1,
        backgroundColor:'#ced4da',
        margin:5,
        borderRadius:10,
        padding:10,
    },
    pokedexImage:{
        height:Dimensions.get('window').height /4,
    },
    pokedexNo:{
        fontWeight:'bold',
    },
    pokedexTitle:{
        fontSize:17,
        fontWeight:'bold',
    },
    pokedexBuild:{
        fontWeight:'bold'
    }
});
