const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
       ...state, data: [...state.data, action.payload.data], loading: false, error: null
      };
    case 'ADD_FAVORITE_FAILURE':
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
}
