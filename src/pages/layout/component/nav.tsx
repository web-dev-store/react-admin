/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
	HomeOutlined,
	ShoppingOutlined,
	TableOutlined,
	FileAddOutlined,
	FormOutlined,
	HeartOutlined
} from '@ant-design/icons'

export default function Nav() {
	const location = useLocation()

	return (
		<Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
			<Menu.Item key="/welcome" icon={<HomeOutlined />}>
				<Link to="/welcome">首页</Link>
			</Menu.Item>

			<Menu.Item key="/dashboard" icon={<ShoppingOutlined />}>
				<Link to="/dashboard">Dashboard</Link>
			</Menu.Item>

			<Menu.Item key="/form" icon={<TableOutlined />}>
				<Link to="/form">Form</Link>
			</Menu.Item>

			<Menu.Item key="/grid" icon={<FileAddOutlined />}>
				<Link to="/grid">Grid</Link>
			</Menu.Item>

			<Menu.Item key="/detail" icon={<FormOutlined />}>
				<Link to="/detail">Detail</Link>
			</Menu.Item>

			<Menu.Item key="/result" icon={<HeartOutlined />}>
				<Link to="/result">Result</Link>
			</Menu.Item>

			<Menu.Item key="/error" icon={<HeartOutlined />}>
				<Link to="/error">Error</Link>
			</Menu.Item>
		</Menu>
	)
}
