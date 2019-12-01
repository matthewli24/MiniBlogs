const initState = {
  blogs: [
    {id: '1', title: 'Confessing Your Love', content: 'Be Yourself'},
    {id: '2', title: 'How To Win', content: 'Never Give Up'},
    {id: '3', title: 'Waking Up At 5am', content: 'Do Not Do That Shit'}
  ]
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('Created Blog Action:', action.blog);
      return state;
    case'CREATE_BLOG_ERROR':
      console.log('Create Blog Error Action:', action.error);
      return state;
    default:
      return state;
  }
};


export default blogReducer;