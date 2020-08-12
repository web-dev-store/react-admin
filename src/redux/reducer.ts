/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loginReducer from '../pages/login/reducer'

const persistConfig = {
	key: 'root',
	storage
}

export interface IRootState {
	lang: string
	theme: string
}

const initRootState: IRootState = {
	lang: 'zh',
	theme: 'default'
}

function globalReducer(state = initRootState, { type, payload }: any) {
	switch (type) {
		case 'CHANGE_LANG':
			return Object.assign({}, state, { lang: payload })
		default:
			return state
	}
}

export default function createReducer(injectedReducers?: any) {
	const rootReducer = combineReducers({
		global: globalReducer,
		user: loginReducer,
		...injectedReducers
	})

	const persistedReducer = persistReducer(persistConfig, rootReducer)
	return persistedReducer
}
