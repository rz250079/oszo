import { combineReducers, createStore, applyMiddleware  } from 'redux';
import ReduxThunk from "redux-thunk";

import { receiptReducer } from 'State/receipt';

const rootReducer = combineReducers({
    receipt: receiptReducer
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk));
