import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
	const posts = yield call(api.fetchPosts);
	console.log('[posts]', posts);
}

function* mySaga() {
	yield takeLatest(actions.getPosts.getPostRequest, fetchPostSaga);
}

// Generator function ES6
export default mySaga;
