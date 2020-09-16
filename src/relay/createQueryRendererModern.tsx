import * as React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from './Environment';

import {Text} from 'react-native';

const createQueryRenderer = (FragmentComponent, Component, config) => {
  const {query, queriesParams} = config;

  const QueryRendererWrapper = () => {
    const variables = queriesParams
      ? queriesParams(this.props)
      : config.variables;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <Text>{error.toString()}</Text>;
          }

          if (props) {
            return <FragmentComponent {...this.props} query={props} />;
          }

          return <Text>Loading</Text>;
        }}
      />
    );
  };
  return QueryRendererWrapper;
};

export default createQueryRenderer;
