import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
/* export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts()); 
        const userIds = _.uniq(_.map(getState().posts, 'userid'))
        userIds.forEach(user => dispatch(fetchUser(user)))
    }
} */
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get("/posts");
        dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
};

export const fetchUser = (user) => {
    return (dispatch) => {
        _fetchUser(user, dispatch);
    };
};
const _fetchUser = _.memoize(async (user, dispatch) => {
    const response = await jsonPlaceholder.get("/users/" + user);
    dispatch({ type: "FETCH_USER", payload: response.data });
});
