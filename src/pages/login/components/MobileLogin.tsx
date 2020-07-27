/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useState, useCallback, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'
import { MobileOutlined, MessageOutlined } from '@ant-design/icons'

import { ILoginInfo } from '../../../services/login'

export interface IMobileLoginProps {
	countDown?: number
	loading: boolean
	loginInfo?: ILoginInfo
	handleSubmit: (values: any) => void
	getCaptcha: (mobile: string) => void
}

const PhoneLogin: React.FC<IMobileLoginProps> = (props) => {
	const { loading, countDown, loginInfo, handleSubmit, getCaptcha } = props
	const [count, setCount] = useState<number>(countDown || 0)
	const [timing, setTiming] = useState(false)
	const [form] = Form.useForm()

	const onGetCaptcha = useCallback(async (mobile: string) => {
		getCaptcha(mobile)
		setTiming(true) // eslint-disable-next-line
	}, [])

	useEffect(() => {
		let interval: number = 0
		const { countDown } = props
		if (timing) {
			interval = window.setInterval(() => {
				setCount((preSecond) => {
					if (preSecond <= 1) {
						setTiming(false)
						clearInterval(interval)
						return countDown || 60
					}
					return preSecond - 1
				})
			}, 1000)
		}
		return () => clearInterval(interval) // eslint-disable-next-line
	}, [timing])

	return (
		<Form
			form={form}
			initialValues={loginInfo}
			onFinish={(values) => handleSubmit(values)}
		>
			<Form.Item
				name="mobile"
				rules={[
					{
						required: true,
						message: '请输入手机号'
					},
					{
						pattern: /^1\d{10}$/,
						message: '手机号格式错误'
					}
				]}
			>
				<Input
					prefix={<MobileOutlined />}
					placeholder="手机号"
					autoComplete="off"
					size="large"
				/>
			</Form.Item>
			<Form.Item shouldUpdate noStyle>
				{({ getFieldValue }) => (
					<Row gutter={8}>
						<Col span={14}>
							<Form.Item
								name="captcha"
								rules={[
									{
										required: true,
										message: '请输入验证码'
									}
								]}
								shouldUpdate
							>
								<Input
									prefix={<MessageOutlined />}
									placeholder="验证码"
									autoComplete="off"
									size="large"
								/>
							</Form.Item>
						</Col>
						<Col span={10}>
							<Button
								disabled={timing}
								style={{ width: '100%' }}
								type="primary"
								htmlType="button"
								size="large"
								onClick={() => {
									const value = getFieldValue('mobile')
									console.log(value)
									onGetCaptcha(value)
								}}
							>
								{timing ? `${count} 秒` : '获取验证码'}
							</Button>
						</Col>
					</Row>
				)}
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox defaultChecked={false}>记住我</Checkbox>
				</Form.Item>
				<a className="login-form-forgot" href="/">
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

export default PhoneLogin
