import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import {Environment} from '../../../relay';
import PersonCard from './PersonCard';
import {View, Text} from 'react-native';
import {PersonRendererQuery} from './__generated__/PersonRendererQuery.graphql';

const PersonRenderer = () => {
  const renderPersons = (people: PersonRendererQuery['response']['people']) => {
    return people.edges.map(({node}) => <PersonCard person={node} />);
  };

  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PersonRendererQuery {
          people {
            edges {
              node {
                ...PersonCard_person
              }
            }
          }
        }
      `}
      variables={null}
      render={({error, props}) => {
        if (error) {
          return (
            <View>
              <Text>{error.message}</Text>
            </View>
          );
        } else if (props) {
          return renderPersons(props.people);
        }
        return (
          <View>
            <Text>loading</Text>
          </View>
        );
      }}
    />
  );
};

export default PersonRenderer;
