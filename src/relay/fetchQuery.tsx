import {RequestNode, Variables} from 'relay-runtime';
import global from '../helpers/Global';

const TOKEN_KEY = 'token_key';

export const getToken = () => {
  // get token from cookie or session token instead
  return localStorage.getItem(TOKEN_KEY);
};

const config = {
  GRAPHQL_URL: `https://parseapi.back4app.com/graphql`,
};

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });

  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'X-Parse-Application-Id': 'f8pSMPVHNRYMG0jJy8ArJpaa8myO6llMHpTSgG43',
    'X-Parse-Master-Key': 'mGwCt6SFMZYUXK3QufHDlE1nhJkYjH6Xh72KR033',
    'X-Parse-Client-Key': 'ZTfWxTADjeLHRzYn3V7F2XS64XFyBmxgTB1v5PAx',
  };

  const response = await fetch(`${config.GRAPHQL_URL}`, {
    method: 'POST',
    headers,
    body,
  });

  console.log('response', response);

  return await response.json();
};

export default fetchQuery;
