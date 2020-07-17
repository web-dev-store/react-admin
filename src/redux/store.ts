/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import createReducer from './reducer'
import rootSaga from './sagas'

interface IStore extends Store {
	injectedReducers?: any
}

const sagaMiddleware = createSagaMiddleware()

const store: IStore = createStore(
	createReducer(),
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

store.injectedReducers = {} // Reducer registry

export const persistor = persistStore(store)

export default store
