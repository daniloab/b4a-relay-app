import React, {useState} from 'react';

import {View, Button, Text} from 'react-native';

import {useFormik, FormikProvider} from 'formik';

import styled from 'styled-components';

import SignUpMutation from './mutations/SignUpMutation';
import { Environment } from '../../relay';

const TextInput = styled.TextInput``;

const SignUp = () => {
  const [userCreated, setUserCreated] = useState({});

  const onSubmit = (values) => {
    const {username, password} = values;

    const input = {
      userFields: {
        username,
        password,
      },
    };

    SignUpMutation.commit({
      environment: Environment,
      input,
      onCompleted: (response) => {
        console.log(response);
        // const {viewer} = response?.signUp;
        // const {sessionToken, user} = viewer;
        //
        // if (sessionToken !== null) {
        //   alert(`user ${user.username} successfully created`);
        //   setUserCreated(user);
        //   return;
        // }
      },
      onError: (errors) => {
        console.log(errors);
        alert('user cannot be created');
      },
    });
  };

  const formikbag = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
  });

  const {handleSubmit, setFieldValue} = formikbag;

  if (userCreated?.id) {
    return (
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Text>User {userCreated.name} created</Text>
      </View>
    );
  }

  return (
    <FormikProvider value={formikbag}>
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Text>Username</Text>
        <TextInput
          name={'username'}
          style={{width: 150, height: 30, borderColor: 'gray', borderWidth: 1}}
          autoCapitalize="none"
          onChangeText={(text) => setFieldValue('username', text)}
        />

        <Text style={{marginTop: 15}}>Password</Text>
        <TextInput
          style={{width: 150, height: 30, borderColor: 'gray', borderWidth: 1}}
          name={'password'}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setFieldValue('password', text)}
        />
        <Button title={'sign up'} onPress={() => handleSubmit()} />
      </View>
    </FormikProvider>
  );
};

export default SignUp;
