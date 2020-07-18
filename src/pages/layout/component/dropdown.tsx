/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd'
import { SettingOutlined, LoginOutlined } from '@ant-design/icons'

import { logout } from '../../login/actions'

const DropdownHeader: React.FC = () => {
	const dispatch = useDispatch()
	const user = useSelector(({ user }: any) => user)

	const hanldeClick = ({ key }: any) => {
		if (key === 'logout') dispatch(logout(user))
	}

	const menu = (
		<Menu onClick={hanldeClick}>
			<Menu.Divider />
			<Menu.Item key="logout" icon={<LoginOutlined />}>
				退出系统
			</Menu.Item>
		</Menu>
	)

	return (
		<Dropdown overlay={menu} trigger={['click']}>
			<Button
				type="link"
				className="ant-dropdown-link"
				onClick={(e) => e.preventDefault()}
			>
				<SettingOutlined />
			</Button>
		</Dropdown>
	)
}

export default DropdownHeader
