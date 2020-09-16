import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import Providers from './Providers';
import Home from "../components/home/Home";

const App = () => {
  return (
    <Providers>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <Home/>
      </SafeAreaView>
    </Providers>
  );
};

export default App;
