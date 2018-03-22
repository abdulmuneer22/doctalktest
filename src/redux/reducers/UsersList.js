const UsersList = (state = "", action) => {
  switch (action.type) {
    case "RECEIVED_USER_SUGGESTIONS":
      return action.payload;
    case "CLEAR_USERS":
      return "";
    default:
      return state;
  }
};

export default UsersList;
