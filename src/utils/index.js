import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');

    const token = data.request_token;

    if (data.success) {
      localStorage.set('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
      // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
    }
  } catch (error) {
    console.log('Sorry, your token could not be created.');
  }
};

// eslint-disable-next-line consistent-return
export const createSessionId = async () => {
  const token = localStorage.get('request_token');

  if (token) {
    try {
      const { data: { session_id } } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });

      localStorage.set('session_id', session_id);

      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
