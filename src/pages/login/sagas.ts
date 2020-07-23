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
	LOGOUT_FAILURE,
	SEND_CAPTCHA,
	SEND_CAPTCHA_SUCCESS,
	SEND_CAPTCHA_FAILURE
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
			payload: {
				userInfo: userInfoRes,
				remember: action.payload.remember,
				loginType: action.payload.loginType
			}
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
		yield call(LoginService.logout, action.payload.userInfo)
		yield put({
			type: LOGOUT_SUCCESS
		})
	} catch (error) {
		yield put({
			type: LOGOUT_FAILURE
		})
	}
}

function* sendCaptcha(action: any) {
	yield put({
		type: REQUEST
	})
	try {
		const res = yield call(LoginService.sendCaptcha, action.payload)
		yield put({
			type: SEND_CAPTCHA_SUCCESS,
			payload: res
		})
	} catch (error) {
		yield put({
			type: SEND_CAPTCHA_FAILURE,
			payload: error
		})
	}
}

function* loginSaga() {
	yield takeEvery(LOGIN_SAGA, loginHandle)
	yield takeEvery(LOGOUT_SAGA, logoutHandle)
	yield takeEvery(SEND_CAPTCHA, sendCaptcha)
}

export default loginSaga
