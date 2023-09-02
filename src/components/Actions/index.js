  
const fetchUsersRequest = () => {
    return {
      type: "fetch_user_request",
    };
  };
  
  const fetchUsersSuccess = (users) => {
    return {
      type: "fetch_user_success",
      payload: users,
    };
  };
  
  const fetchUsersFailure = (error) => {
    return {
      type: "fetch_user_failure",
      payload: error,
    };
  };
  
  export const fetchUsers = () => {

    return (dispatch) => {
      dispatch(fetchUsersRequest());
      fetch("https://swapi.dev/api/people")
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchUsersSuccess(data.results));
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    };
  };
