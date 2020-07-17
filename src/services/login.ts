/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { IUserInfo } from '../pages/login/reducer'

const LoginService = {
	login(userInfo: IUserInfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (userInfo.username === 'admin' && userInfo.password === '123456') {
					resolve({ id: 123, username: 'admin' })
				} else {
					reject({ err: { msg: 'username or password is wrong' } })
				}
			}, 1000)
		})
	},
	getMoreUserInfo(userInfo: IUserInfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (userInfo.id === 123) {
					resolve({ ...userInfo, score: '100' })
				} else {
					reject({ msg: 'get user info failed' })
				}
			}, 1000)
		})
	},
	logout(userInfo: IUserInfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (userInfo.id === 123) {
					resolve({ tip: { msg: 'logout success' } })
				} else {
					reject({ err: { msg: 'logout failed' } })
				}
			}, 1000)
		})
	}
}

export default LoginService
