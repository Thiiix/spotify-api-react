export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOADING_START = 'LOADING_START';
export const LOADING_STOP = 'LOADING_STOP';

export const login = response => ({
  type: LOGIN,
  payload: response
});

export const logout = () => ({
  type: LOGOUT
});

export const loadingStart = () => ({
  type: LOADING_START
});

export const token = (code, grant_type = 'authorization_code') => {
  return (dispatch, getState) => {
    dispatch(loadingStart());

    let SpotifyAuthData = getState().SpotifyAuthReducer;
    let codeParam;

    if (grant_type === 'authorization_code') {
      codeParam = code;
    } else {
      codeParam = SpotifyAuthData.refresh_token;
    }

    return fetch(`http://localhost:8888/token?code=${codeParam}&grant_type=${grant_type}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => res.json())
      .then(json => {
        dispatch(login(json));
        return json;
      })
      .catch(error => console.error(error));
  };
};

function _handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
