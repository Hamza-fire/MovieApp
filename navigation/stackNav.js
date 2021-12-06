import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';
import Details from '../screens/Details';
import Search from '../screens/Search';
import { COLORS } from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();

export default function StackNav() {
  
 let routeName = 'Search';
    return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen name='Search' component={Search}
              options={({navigation}) => ({
                title: '', 
                headerStyle: {
                  backgroundColor: COLORS.white,
                  elevation: 0
                }})}
            />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({navigation}) => ({
            title: '', 
            headerStyle: {
              backgroundColor: COLORS.white,
              elevation: 0
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button name="long-arrow-left"size={25} backgroundColor={COLORS.white} color="#333" onPress={() => navigation.goBack()}/>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }


  

