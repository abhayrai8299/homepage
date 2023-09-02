const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "fetch_user_request":
        return {
          ...state,
          loading: true,
        };
      case "fetch_user_success":
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case "fetch_user_failure":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;