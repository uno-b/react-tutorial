const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. ",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. ",
    },
    {
      id: "3",
      title: "A Helix Fossil was Found",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. ",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });

    return {
      ...state,
      posts: newPosts,
    };
  }

  return state;
};

export default rootReducer;
