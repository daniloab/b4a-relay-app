import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import {Environment} from '../../relay';
import {Text, View} from 'react-native';

const UserLoggedRenderer = () => {
  const renderContent = (viewer) => {
    if (!viewer?.user) {
      return null;
    }

    const {user} = viewer;

    return (
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Text>User {user?.username || user?.email} logged</Text>
      </View>
    );
  };

  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query UserLoggedRendererQuery {
          viewer {
            user {
              id
              createdAt
              updatedAt
              username
            }
            sessionToken
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
          console.log('props.viewer', props.viewer)
          return renderContent(props.viewer);
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

export default UserLoggedRenderer;
