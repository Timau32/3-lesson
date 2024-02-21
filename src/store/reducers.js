const initialState = {
    count: 0,
    title: "Hello world"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer
