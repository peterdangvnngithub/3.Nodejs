import { createActions } from 'redux-actions';

export const getPosts = createAction({
	getPostRequest: undefined,
	getPostSuccess: (payload) => payload,
	getPostFailure: (err) => err,
});
