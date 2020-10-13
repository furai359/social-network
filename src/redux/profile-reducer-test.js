import profileReducer, {addPost} from "./profile-reducer";


it('posts length should be incremented', () => {
    //1. test data
    let initialState = {
        posts : [
            { id: 1, text:'first post' , likesCount: 10},
            { id: 2, text:'second post', likesCount: 14},
            { id: 3, text:'third post' , likesCount: 23},
        ]
    }
    let action = {
        type: addPost('hello world')
    }
    //2. action
    let newState = profileReducer(initialState, action)
    //3. expected length is 4
    expect(newState.posts.length).toBe(4);
})