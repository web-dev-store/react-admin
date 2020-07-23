/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import {
	LOGIN_SAGA,
	LOGOUT_SAGA,
	CLEAR_LOGIN_MESSAGE,
	SEND_CAPTCHA
} from './constants'
import { ILoginInfo, IUserInfo } from '../../services/login'

export const login = (loginInfo: ILoginInfo) => ({
	type: LOGIN_SAGA,
	payload: loginInfo
})

export const logout = (userInfo: IUserInfo) => ({
	type: LOGOUT_SAGA,
	payload: userInfo
})

export const clearLoginMsg = () => ({
	type: CLEAR_LOGIN_MESSAGE
})

export const sendCaptcha = (mobile: string) => ({
	type: SEND_CAPTCHA,
	payload: mobile
})
