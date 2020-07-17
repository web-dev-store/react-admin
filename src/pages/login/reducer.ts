/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

export interface IUserInfo {
	id: number
	username: string
	password: string
	score: number
}

const userInit = {
	isLogin: false,
	userInfo: { id: null, username: '', score: 0 },
	loading: false,
	err: { msg: '' }
}

const loginReducer = (state = { ...userInit }, { type, payload }: any) => {
	switch (type) {
		case 'REQUEST':
			return { ...state, loading: true }
		case 'LOGIN_SUCCESS':
			return {
				...state,
				isLogin: true,
				loading: false,
				userInfo: { ...payload }
			}
		case 'LOGIN_FAILURE':
			return { ...state, ...userInit, ...payload }
		case 'LOGOUT_SUCCESS':
			return { ...userInit, ...payload }
		case 'LOGOUT_FAILURE':
			return { ...state, ...userInit, ...payload }
		default:
			return state
	}
}

export default loginReducer
