import createReducer from '../redux/reducer'
import { persistStore } from 'redux-persist'

export function injectReducerFactory(store) {
	return function injectReducer(key, reducer) {
		store.injectedReducers[key] = reducer // eslint-disable-line no-param-reassign
		store.replaceReducer(createReducer(store.injectedReducers))
		persistStore(store)
	}
}

export default function getInjectors(store) {
	return {
		injectReducer: injectReducerFactory(store)
	}
}
