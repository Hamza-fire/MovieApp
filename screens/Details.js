import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { FONTS, icons } from '../constants';
import styles from '../constants/styleSignup'

const Details = ({navigation}) => {

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Resultat de la recherche</Text>
          </View>
        </View>
    )
}
  
export default Details;
  
  