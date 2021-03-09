import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation LogOutMutation($input: LogOutInput!) {
    logOut(input: $input) {
      viewer {
        user {
          id
        }
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
