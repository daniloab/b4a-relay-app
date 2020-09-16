import React from 'react';
import {GraphQLTaggedNode, QueryRenderer, Variables} from 'react-relay';
import {Environment} from './Environment';

type Config = {
  query: GraphQLTaggedNode;
  queriesParams?: (props: any) => Record<string, unknown> | null;
  variables?: Variables;
  loadingView?: React.ReactNode | null;
};

export const createQueryRendererModern = (
  FragmentComponent: React.ComponentType,
  config: Config,
): React.ComponentType => {
  const {query, queriesParams} = config;

  const QueryRendererWrapper = (wrapperProps) => {
    const variables = queriesParams
      ? queriesParams(wrapperProps)
      : config.variables;

    return (
      <QueryRenderer
        environment={Environment}
        query={query}
        variables={variables}
        fetchPolicy={config.fetchPolicy || 'store-or-network'}
        // eslint-disable-next-line
        render={({error, props, retry}) => {
          // eslint-disable-next-line
          // console.log('QR', {
          //   displayName: FragmentComponent.displayName,
          //   configName: environment.configName,
          //   queryName: getQueryName(query),
          //   hasData: !!props,
          // });

          if (props) {
            const fragmentProps = config.getFragmentProps
              ? config.getFragmentProps(props)
              : {query: props};

            return <FragmentComponent {...wrapperProps} {...fragmentProps} />;
          }

          if (error) {
            return null;
          }

          if (config.loadingView) {
            return config.loadingView;
          }

          return null;
        }}
      />
    );
  };

  return QueryRendererWrapper;
};
