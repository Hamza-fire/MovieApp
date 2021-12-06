import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_900Black, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';
import Routes from './navigation/route'




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
      <Routes/>
    );
  }
}
  

export default App;

