/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

export interface ILoginInfo {
	username: string
	password: string
	mobile: string
	captcha: string
	remember: boolean
	loginType: string
}

export interface IUserInfo {
	id: number
	username: string
	roles: Array<string>
}

const LoginService = {
	login(loginInfo: ILoginInfo) {
		console.log('loginInfo ----- ', loginInfo)
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (loginInfo.loginType === 'account') {
					if (
						loginInfo.username === 'admin' &&
						loginInfo.password === '123456'
					) {
						resolve({ id: 123, username: 'admin' })
					} else {
						reject({ msg: { type: 'error', content: '用户名或密码错误' } })
					}
				} else if (loginInfo.loginType === 'mobile') {
					if (
						loginInfo.mobile === '13112341234' &&
						loginInfo.captcha === '1234'
					) {
						resolve({ id: 123, username: 'admin' })
					} else {
						reject({ msg: { type: 'error', content: '手机号码验证失败' } })
					}
				}
			}, 1000)
		})
	},
	getMoreUserInfo(userInfo: IUserInfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (userInfo.id === 123) {
					resolve({ ...userInfo, roles: ['admin'] })
				} else {
					reject({ msg: { type: 'error', content: '获取登录用户信息失败' } })
				}
			}, 1000)
		})
	},
	logout(userInfo: IUserInfo) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, 1000)
		})
	},
	sendCaptcha(mobile: string) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (mobile === '13112341234') {
					resolve({
						msg: { type: 'success', content: '获取验证码成功！验证码为：1234' }
					})
				} else {
					reject({ msg: { type: 'error', content: '获取验证码失败' } })
				}
			}, 1000)
		})
	}
}

export default LoginService
