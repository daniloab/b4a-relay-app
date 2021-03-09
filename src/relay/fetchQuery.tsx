import {RequestNode, Variables} from 'relay-runtime';
import global from '../helpers/Global';
import {getSessionToken} from '../components/signIn/SignIn';

export const getToken = async () => {
  const sessionToken = await getSessionToken();

  console.log('sessionToken', sessionToken)

  if (sessionToken) {
    return {
      'X-Parse-Session-Token': sessionToken,
    };
  }

  return {};
};

const config = {
  GRAPHQL_URL: `https://parseapi.back4app.com/graphql`,
};

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });

  const sT = await getToken();

  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'X-Parse-Application-Id': 'f8pSMPVHNRYMG0jJy8ArJpaa8myO6llMHpTSgG43',
    'X-Parse-Master-Key': 'mGwCt6SFMZYUXK3QufHDlE1nhJkYjH6Xh72KR033',
    'X-Parse-Client-Key': 'ZTfWxTADjeLHRzYn3V7F2XS64XFyBmxgTB1v5PAx',
    ...await getToken(),
  };

  // headers
  console.log('headers', headers)

  try {
    const response = await fetch(`${config.GRAPHQL_URL}`, {
      method: 'POST',
      headers,
      body,
    });

    const data = await response.json();

    if (data.errors) {
      throw data.errors;
    }

    return data;
  } catch (err) {
    console.log('err on fetch graphql', err);

    throw err;
  }
};

export default fetchQuery;
