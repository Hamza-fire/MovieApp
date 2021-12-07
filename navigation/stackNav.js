import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search'
import Details from '../screens/Details'
import { COLORS } from '../constants';


const Stack = createStackNavigator();

export default function stackNav() {
  
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


  

