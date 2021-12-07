import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import { FONTS, images } from '../constants';
import styles from '../constants/styleSignup'
import { connect } from 'react-redux'
import toggleFavorite from '../Store/Reducers/favoriteReducer';
import store from '../Store/configureStore';

const Search = ({navigation}) => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState({});

    function loadMovie(title){
      const url = `http://www.omdbapi.com/?s=${title}&apikey=baf284c`
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.Search))
      .catch((error) => alert(error));
    }

    function searchMovieInputChanged(text){
      setTitle(text);
      loadMovie(text);
    }

    function toggleFavoriteMovie(item){
      const action = { type: "TOGGLE_FAVORITE", value: item}
      store.dispatch(action)
    }


      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.h1}>Find Movies, TV shows {'\n'}and more ...</Text>
                <TextInput style={styles.inputSearch} onChangeText={(text) => searchMovieInputChanged(text)} placeholder="Search movies ..."/>

                <FlatList 
                 data = {data}
                 keyExtractor = {({ id }, index) => id}
                 renderItem={({ item }) => {
                   return(
                  <TouchableOpacity style={styles.movieItem} onPress={() => {}}>
                    <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                      <Image 
                      source={{
                        uri: item.Poster,
                      }}
                      resizeMode='contain' style={{width: 75, height: 75, borderRadius: 20}}/>
                      <View style={{width:215, height:80, flex:1}}>
                        <Text style={FONTS.title}>{item.Title}</Text>
                        <View style={{top:15, flexDirection:'row'}}>
                          <Text style={[FONTS.h4]}>{item.Type}</Text>
                          <Image source={images.star} resizeMode='contain' style={{width: 15, height: 15, left: 145, top: 3}}/>
                          <Text style={[FONTS.vote, styles.flexend]}>{item.Year}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                   );
                 }}
                />
          </View>
        </View>
    )
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Search);
  
  