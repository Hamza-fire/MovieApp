import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '.';

export default StyleSheet.create({
    containerParent:{
      flex: 1,
      backgroundColor:COLORS.white
    },
    containerChild: {
      alignItems: 'center',
      marginTop: 150,
      backgroundColor:COLORS.white
    },
    containerParentDetails:{
      flex: 1,
      backgroundColor:COLORS.movieColor4
    },
    containerChildDetails: {
      alignItems: 'center',
      marginTop: 100,
      backgroundColor:COLORS.movieColor4
    },
    inputSearch: {
      height: SIZES.height/15,
      width: SIZES.width/1.3,
      borderRadius: 5,
      top: 80,
      borderWidth: 4,
      textAlign:'center',
      fontFamily: "Lato_700Bold",
      fontSize: SIZES.h2,
      marginBottom : 150
    },
    movieItem : {
      height : SIZES.height/6.7,
      width: SIZES.width/1.2,
      borderRadius: 20,
      backgroundColor:COLORS.movieColor4,
      marginBottom: 20
    },
    flexend :{
      left: 154
    },
    trailer :{
      height: SIZES.height/4.5,
      width: SIZES.width/1.3,
      backgroundColor: COLORS.transparentLightGray1,
      borderRadius: 25,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:40,
      shadowColor:'black',
      elevation: 2
    },
    overview :{
      height: SIZES.height/15,
      width: SIZES.width/1.18,
      flexDirection:'row',
    },
    actors :{
      height: SIZES.height/15,
      width: SIZES.width/1.18,
      marginBottom: 50
    },
    description :{
      height: SIZES.height/8,
      width: SIZES.width/1.18,
    },
    vote :{
      height: SIZES.height/8,
      width: SIZES.width/1.18,
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    marginBot:{
      marginBottom: 25,
    },
  });
