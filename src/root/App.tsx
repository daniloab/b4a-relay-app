import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </Providers>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
