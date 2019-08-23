
const teamReducer = (state={}, action) => {
  switch(action.type) {
    case "CREATE_TEAM":
        console.log("created team", action.team);
        return state;
  }
  return state;
};

export default teamReducer;
