import context from "./context";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [...state, { title: `Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "addBlogPost" });
  };
};

export const { Context, Provider } = context(blogReducer, { addBlogPost }, []);
