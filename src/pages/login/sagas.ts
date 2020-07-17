/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { call, put, takeEvery } from 'redux-saga/effects'

import {
	LOGIN_SAGA,
	LOGOUT_SAGA,
	REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE
} from './constants'
import LoginService from '../../services/login'

function* loginHandle(action: any) {
	yield put({
		type: REQUEST
	})
	try {
		const loginRes = yield call(LoginService.login, action.payload)
		const userInfoRes = yield call(LoginService.getMoreUserInfo, loginRes)
		yield put({
			type: LOGIN_SUCCESS,
			payload: userInfoRes
		})
	} catch (error) {
		yield put({
			type: LOGIN_FAILURE,
			payload: error
		})
	}
}

function* logoutHandle(action: any) {
	yield put({
		type: REQUEST
	})
	try {
		const loginOutRes = yield call(LoginService.logout, action.payload.userInfo)
		yield put({
			type: LOGOUT_SUCCESS,
			payload: loginOutRes
		})
	} catch (error) {
		yield put({
			type: LOGOUT_FAILURE,
			payload: error
		})
	}
}

function* loginSaga() {
	yield takeEvery(LOGIN_SAGA, loginHandle)
	yield takeEvery(LOGOUT_SAGA, logoutHandle)
}

export default loginSaga
