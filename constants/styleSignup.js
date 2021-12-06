import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '.';

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
    containerChildV2: {
      alignItems: 'center',
      marginTop: 20,
      backgroundColor:COLORS.white
    },
    containerSplit: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:COLORS.white
    },
    containerMode:{
      alignItems:'center',
      height: '100%'
     },
    next: {
      width: SIZES.width/6.2,
      height: SIZES.height/15,
      borderRadius: SIZES.nextRadius,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 250,
      marginLeft: 200,
      backgroundColor:COLORS.secondary
    },
    nextBienvenue: {
        width: SIZES.width/2.4,
        height: SIZES.height/16.5,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 270,
        marginLeft: 150,
        backgroundColor:COLORS.secondary
    },
    nextRegle: {
      width: SIZES.width/6.2,
      height: SIZES.height/15,
      borderRadius: SIZES.radius,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
      marginLeft: 200,
      backgroundColor:COLORS.secondary
  },
    input: {
      height: SIZES.height/15,
      width: SIZES.width/2,
      borderRadius: 5,
      top: 80,
      borderWidth: 4,
      textAlign:'center',
      fontFamily: "Lato_700Bold",
      fontSize: SIZES.h2,
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
  });
