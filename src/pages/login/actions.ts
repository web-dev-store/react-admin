/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { LOGIN_SAGA, LOGOUT_SAGA } from './constants'
import { IUserInfo } from './reducer'

export const login = (userInfo: IUserInfo) => ({
	type: LOGIN_SAGA,
	payload: userInfo
})

export const logout = (userInfo: IUserInfo) => ({
	type: LOGOUT_SAGA,
	payload: userInfo
})
