/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { IUserInfo } from '../../services/login'

export interface ILoginState {
	isLogin: boolean
	loading: boolean
	userInfo: IUserInfo | null
	msg: any
	remember: boolean
	loginType: string
}

const loginStateInit: ILoginState = {
	isLogin: false,
	loading: false,
	userInfo: null,
	msg: null,
	remember: false,
	loginType: ''
}

const loginReducer = (
	state = { ...loginStateInit },
	{ type, payload }: any
) => {
	switch (type) {
		case 'REQUEST':
			return { ...state, loading: true }
		case 'LOGIN_SUCCESS':
			return {
				...state,
				isLogin: true,
				loading: false,
				userInfo: { ...payload.userInfo },
				msg: null,
				remember: payload.remember,
				loginType: payload.loginType
			}
		case 'LOGIN_FAILURE':
			return { ...state, ...loginStateInit, ...payload }
		case 'LOGOUT_SUCCESS':
			return { ...loginStateInit }
		case 'LOGOUT_FAILURE':
			return { ...loginStateInit }
		case 'CLEAR_LOGIN_MESSAGE':
			return { ...state, msg: null }
		case 'SEND_CAPTCHA_SUCCESS':
			return { ...loginStateInit, ...payload }
		case 'SEND_CAPTCHA_FAILURE':
			return { ...loginStateInit, ...payload }
		default:
			return state
	}
}

export default loginReducer
