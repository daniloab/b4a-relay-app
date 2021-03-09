import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation LogInMutation($input: LogInInput!) {
    logIn(input: $input) {
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
  }
`;

function commit({ environment, input, onCompleted, onError }) {
  const variables = { input };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
  });
}

export default {
  commit,
};
