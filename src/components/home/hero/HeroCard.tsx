import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

import {View, Text} from 'react-native';
import {HeroCard_hero} from './__generated__/HeroCard_hero.graphql';

type HeroCardProps = {
  hero: HeroCard_hero;
};

const HeroCard = ({hero}: HeroCardProps) => {
  return (
    <View>
      <Text>Name: {hero.name}</Text>
      <Text>Height: {hero.height}</Text>
    </View>
  );
};

export default createFragmentContainer(HeroCard, {
  hero: graphql`
    fragment HeroCard_hero on Hero {
      id
      name
      height
    }
  `,
});
