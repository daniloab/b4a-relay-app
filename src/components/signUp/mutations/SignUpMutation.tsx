import {commitMutation, graphql} from 'react-relay';

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      viewer {
        user {
          id
          username
          createdAt
        }
        sessionToken
      }
    }
  }
`;

function commit({environment, input, onCompleted, onError}) {
  const variables = {input};

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
