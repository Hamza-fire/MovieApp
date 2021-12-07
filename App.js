import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_900Black, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';
import Routes from './navigation/route'
import Search from './screens/Search'
import Details from './screens/Details'
import { Provider } from 'react-redux';
import Store from './Store/configureStore'





const App = () => {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <Search/>
      </Provider>
    );
  }
}
  

export default App;

