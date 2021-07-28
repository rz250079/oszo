import { combineReducers, createStore, applyMiddleware  } from 'redux';
import ReduxThunk from "redux-thunk";

import { receiptReducer } from 'State/receipt';
import { userReducer } from 'State/user';

const rootReducer = combineReducers({
    receipt: receiptReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk));
