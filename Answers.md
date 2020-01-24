1. What problem does the context API help solve?

Context API helps us to manage state more efficiently than useState and props and classes alone, especially for larger scale projects.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions and supply different case functions to manipulate state in the redux store in your react app. It makes it very simple to manipulate the state and bring it over to multiple components throughout our application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state over the entire application, and component state is in a component alone. It's good to stay using component state when dealing with forms or updating small pieces of state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to use functions within our dispatch and make our reducers and actions more complex.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system, it just makes sense to me. I like bringing state and actions over to components easily and passing down props as necessary.
