import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { fetchBooks } from './booksAPI'
import { SEARCH_BOOKS, BOOKS_FETCH_SUCCEEDED, BOOKS_FETCH_FAILED } from './redux/actions'

//get books for search
function* getBooks(action) {
  console.log("sagas");
   try {
      const booksResults = yield call(fetchBooks, action.payload)
      //start moviesFetchSucceeded action where page is 1
      yield put({type: BOOKS_FETCH_SUCCEEDED,
        payload: {
          results: booksResults.items, searchString: action.payload,
        }
      });
   } catch (e) {
      yield put({type: BOOKS_FETCH_FAILED, payload: e.message});
   }
}

function* mySaga() {
  yield takeEvery("SEARCH_BOOKS", getBooks);

}

export default mySaga
