import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';
import {createQueryRendererModern} from '../../relay';
import {View, Text} from 'react-native';
import {Home_query} from './__generated__/Home_query.graphql';
import environment from '../../relay/Environment';
import HeroRenderer from './hero/HeroRenderer';
import PersonRenderer from './person/PersonRenderer';

type HomeProps = {
  query: Home_query;
};

const Home = ({query}: HomeProps) => {
  return (
    <View>
      <PersonRenderer />
      <HeroRenderer />
      <Text>API Health: {query.health ? 'Health' : 'Not health'}</Text>
    </View>
  );
};

export default Home;

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
