import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import {createQueryRendererModern} from '../../relay';
import {View, Text} from 'react-native';

type HomeProps = {
  query: Home_query;
};

const Home = ({query}: HomeProps) => {
  return (
    <View>
      <Text>API Health: {query}</Text>
    </View>
  );
};

const HomeFragment = createFragmentContainer(Home, {
  query: graphql`
    fragment Home_query on Query {
      health
    }
  `,
});

export default createQueryRendererModern(HomeFragment, Home, {
  query: graphql`
    query HomeQuery {
      ...Home_query
    }
  `,
  hideSplash: true,
});
