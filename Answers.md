1. What problem does the context API help solve?
    --> The problem of prop drilling (passing props down through components in which we don't need them in order to "drill" them down into the one we do need them in).
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    --> ACTIONS: Action aren't really "actions" in the true sense of taking action. They are merely "checkers" put in place to check if something needs to happen.
    --> REDUCERS: These are where the real action takes place. Once our Actions determine what the something is that needs to happen (ie. type: <something>), our reducers take that information and apply (or act it out) in our application.
    --> STORE: The Store is aptly named, as it holds all of our state/data (and more) inside of itself. Instead of prop drilling to get our data to where it needs to be, we can simply pull that information from the Store directly into the component we need it in.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    --> Application State is more broad in that it's state which will be used across various components across an application. This would be the sort of state to be used inside a Redux Store.
    --> Component State is state which is more localized to a single component (and maybe its child). Using props would be ideal here.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    --> redux-thunk allows us to intercept our data, before it is used or rendered in our app. Because of this, we can make asynchronous function calls in our Actions (ie () => () => {});
5. What is your favorite state management system you've learned in this sprint? Please explain why!
    --> My favorite state management system thus far would probably be the Context API. It gives me many of the benefits of Redux, but is simpler to use. Of course, it would not be ideal for corporation-scale applications. But it's perfect for smaller ones (NOTE: I could see myself liking Redux more over time and with more practice).
