import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

import Providers from './Providers';
import PersonRenderer from '../components/home/person/PersonRenderer';

const App = () => {
  return (
    <Providers>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            Back4App React Native Relay - Query Renderer List Example
          </Text>
          <PersonRenderer />
        </View>
      </SafeAreaView>
    </Providers>
  );
};

export default App;
