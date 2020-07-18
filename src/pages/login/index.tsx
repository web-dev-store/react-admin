/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import { Form, Input, Button, Divider, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { login } from './actions'
import './index.css'

const Login: React.FC = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const user = useSelector(({ user }: any) => user)

	const { isLogin, err, loading } = user

	useEffect(() => {
		if (err && err.msg) message.error(err.msg)
	}, [err])

	if (isLogin) {
		const { from = '/welcome' }: any = location.state || {}
		return <Redirect to={from} />
	}

	return (
		<div className="login-container">
			<div className="login-area">
				<h2 className="login-title">Login Form</h2>
				<Form
					className="login-form"
					onFinish={(values: any) => dispatch(login(values))}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your Username!'
							}
						]}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
							autoComplete="off"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your Password!'
							}
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
							autoComplete="off"
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							block
							loading={loading}
						>
							登 录
						</Button>
					</Form.Item>
				</Form>
				<Divider
					style={{
						color: '#666',
						fontWeight: 'normal',
						fontSize: 12
					}}
				>
					其他方式登录
				</Divider>
			</div>
		</div>
	)
}

export default Login
