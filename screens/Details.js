import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Image} from 'react-native';
import { FONTS, images } from '../constants';
import styles from '../constants/styleSignup'

const Details = ({navigation}) => {
  const [data, setData] = useState({});
  const url = `https://omdbapi.com/?apikey=baf284c&t=Once_upon_a_time`

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => alert(error));
  }, []);
  
      return (
        <View style={styles.containerParentDetails}>
          <View style={styles.containerChildDetails}>
              <StatusBar style="auto" />
              <View style={{flexDirection:'row', flex:1, alignItems:'center', marginBottom: 80}}>
                      <Image 
                      source={{
                        uri: data.Poster,
                      }}
                      resizeMode='contain' style={{width: 100, height: 100, borderRadius: 200}}/>
                      <View style={{width:215, height:80, flex:1}}>
                        <Text style={FONTS.titleDetails}>{data.Title}</Text>
                        <View style={{top:15, flexDirection:'row'}}>
                          <Text style={[FONTS.h4]}>by {data.Writer}</Text>
                        </View>
                      </View>
                </View>
                <View style={styles.trailer}><Text>[TRAILER]</Text></View>
                <View style={styles.overview}>
                  <Text style={FONTS.titleDetails}>Overview</Text>
                  <View style={{flex:1, justifyContent:'flex-end'}}></View>
                  <Image source={images.star} resizeMode='contain' style={{width: 15, height: 15, top: 3}}/>
                  <Text style={FONTS.vote}>  {data.imdbRating}</Text>
                </View>
                <View style={styles.description}>
                          <Text style={FONTS.description}>{data.Plot}</Text>
                </View>
                <View style={styles.actors}>
                  <Text style={FONTS.titleDetails}>Actors {'\n'}</Text>
                  <Text style={FONTS.vote}>{data.Actors}</Text>
                </View>
                <View style={styles.vote}>
                  <View style={{flex:0.5}}>
                        <Text style={[FONTS.vote, styles.marginBot]}>IMDb</Text>
                        <Text style={FONTS.rating}>{data.imdbRating}<Text style={FONTS.h4}>/10</Text></Text>
                  </View>
                  <View style={{flex:0.5}}>
                        <Text style={[FONTS.vote, styles.marginBot]}>Metacritic</Text>
                        <Text style={FONTS.rating}>{data.Metascore}<Text style={FONTS.h4}>/100</Text></Text>
                  </View>
                </View>
          </View>
        </View>
    )
}
  
export default Details;
  
  