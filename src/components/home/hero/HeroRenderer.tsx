import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import {Environment} from '../../../relay';
import HeroCard from './HeroCard';
import {View, Text} from 'react-native';
import {HeroRendererQuery} from './__generated__/HeroRendererQuery.graphql';

const HeroRenderer = () => {
  const renderHeroes = (heroes: HeroRendererQuery['response']['heroes']) => {
    return heroes.edges.map(({node}) => <HeroCard hero={node} />);
  };

  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query HeroRendererQuery {
          heroes {
            edges {
              node {
                ...HeroCard_hero
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
          return renderHeroes(props.heroes);
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

export default HeroRenderer;
