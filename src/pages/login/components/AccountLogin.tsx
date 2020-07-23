/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { ILoginInfo } from '../../../services/login'

export interface IAccountLoginProps {
	loading: boolean
	loginInfo?: ILoginInfo
	handleSubmit: (values: any) => void
}

const AccountLogin: React.FC<IAccountLoginProps> = (props) => {
	const { loading, loginInfo, handleSubmit } = props
	const [form] = Form.useForm()

	return (
		<Form
			form={form}
			initialValues={loginInfo}
			onFinish={(values) => handleSubmit(values)}
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: '请输入用户名'
					}
				]}
			>
				<Input
					prefix={<UserOutlined />}
					placeholder="用户名"
					autoComplete="off"
					size="large"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: '请输入密码'
					}
				]}
			>
				<Input.Password
					prefix={<LockOutlined />}
					type="password"
					placeholder="密码"
					autoComplete="off"
					size="large"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>记住我</Checkbox>
				</Form.Item>
				<a className="login-form-forgot" href="/login">
					忘记密码？
				</a>
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					block
					loading={loading}
					size="large"
				>
					登 录
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AccountLogin
