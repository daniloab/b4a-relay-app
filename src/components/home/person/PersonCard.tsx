import React from 'react';

import {createFragmentContainer, graphql} from 'react-relay';

import {View, Text} from 'react-native';
import {PersonCard_person} from './__generated__/PersonCard_person.graphql';

type PersonCardProps = {
  person: PersonCard_person;
};

const PersonCard = ({person}: PersonCardProps) => {
  return (
    <View>
      <Text>Name: {person.name}</Text>
      <Text>Salary: {person.salary}</Text>
    </View>
  );
};

export default createFragmentContainer(PersonCard, {
  person: graphql`
    fragment PersonCard_person on Person {
      id
      name
      salary
    }
  `,
});
