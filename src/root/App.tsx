import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

import Providers from './Providers';
import SignIn from "../components/signIn/SignIn";

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
            Back4App React Native Relay - Sign In Flow
          </Text>
          <SignIn />
        </View>
      </SafeAreaView>
    </Providers>
  );
};

export default App;
