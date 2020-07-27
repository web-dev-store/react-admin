/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { Divider, message, Tabs } from 'antd'
import { WechatOutlined, QqOutlined, GithubOutlined } from '@ant-design/icons'

import { login, sendCaptcha, clearLoginMsg } from './actions'
import AccountLogin from './components/AccountLogin'
import MobileLogin from './components/MobileLogin'
import { ILoginInfo } from '../../services/login'

import logo from '../../assets/logo.svg'
import './index.css'

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()

	const [loginType, setLoginType] = useState<string>('account')

	const user = useSelector(({ user }: any) => user)
	const { isLogin, msg, loading } = user

	useEffect(() => {
		if (msg) {
			message.open({
				type: msg.type,
				content: msg.content,
				duration: 3
			})
			dispatch(clearLoginMsg())
		} // eslint-disable-next-line
	}, [msg])

	if (isLogin) {
		const { from = '/welcome' }: any = location.state || {}
		return <Redirect to={from} />
	}

	const handleSubmit = (values: ILoginInfo) =>
		dispatch(login({ ...values, loginType }))

	const getCaptcha = (mobile: string) => dispatch(sendCaptcha(mobile))

	return (
		<div className="login-container">
			<div className="login-wrapper">
				<div className="login-header">
					<img alt="logo" className="login-logo" src={logo} />
					<span className="login-title">React Admin</span>
				</div>
				<Tabs
					defaultActiveKey={loginType}
					onChange={(activeKey) => setLoginType(activeKey)}
				>
					<Tabs.TabPane tab="账号密码登录" key="account">
						<AccountLogin loading={loading} handleSubmit={handleSubmit} />
					</Tabs.TabPane>
					<Tabs.TabPane tab="手机号登录" key="mobile">
						<MobileLogin
							countDown={120}
							loading={loading}
							handleSubmit={handleSubmit}
							getCaptcha={getCaptcha}
						/>
					</Tabs.TabPane>
				</Tabs>
				<Divider
					style={{
						color: '#666',
						fontWeight: 'normal',
						fontSize: 12,
						marginTop: 0
					}}
				>
					其他方式登录
				</Divider>
				<div className="other">
					<WechatOutlined className="other-icon weixin" />
					<QqOutlined className="other-icon qq" />
					<GithubOutlined className="other-icon github" />
				</div>
			</div>
		</div>
	)
}

export default Login
