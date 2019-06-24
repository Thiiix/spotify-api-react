import {
  LOGIN,
  LOGOUT,
  LOADING_START,
} from '../actions/SpotifyAuthActions';

const initialState = {
  token_type: null,
  access_token: null,
  refresh_token: null,
  expires_at: null,
  scope: null,
  authenticated: false,
  denied: false,
  loading: false
};

const increaseSecondsOnCurrentDate = seconds => new Date(Date.now() + 1000 * parseInt(seconds));

export default function spotifyAuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token ? action.payload.refresh_token : state.refresh_token,
        token_type: action.payload.token_type,
        expires_at: increaseSecondsOnCurrentDate(action.payload.expires_in),
        authenticated: true,
        scope: action.payload.scope,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        access_token: null,
        token_type: null,
        expires_at: null,
        authenticated: false,
        scope: null,
        loading: false,
      };

    case LOADING_START:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
//
// export function authenticated(state = false, action) {
//   switch (action.type) {
//     case 'AUTHENTICATED':
//       return action.authenticated;
//     default:
//       return state;
//   }
// }
