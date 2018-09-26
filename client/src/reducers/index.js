import { combineReducers } from 'redux';
import reducerFetchUser from './reducer_user';
import reducerFecthAuthors from './reducer_authors';

const rootReducer = combineReducers({
  user: reducerFetchUser,
  authors: reducerFecthAuthors
});

export default rootReducer;
