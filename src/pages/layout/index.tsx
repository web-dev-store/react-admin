/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import Nav from './component/nav'
import Dropdown from './component/dropdown'
import RouteConfig, { IRouteConfig } from '../../routes/routes'
import CheckRoute from '../../routes/CheckRoute'
import './index.css'

const { Header, Sider, Content } = Layout

const LayoutPage: React.FC<any> = (props) => {
	if (props.location.pathname === '/') props.history.push('/welcome')

	const [collapsed, setCollapsed] = useState(false)
	return (
		<Layout id="layout" className="layout">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo">
					<h3>Hello</h3>
				</div>
				<Route component={Nav} />
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: () => setCollapsed(!collapsed)
						}
					)}
					<span className="header-settings">
						<Dropdown />
					</span>
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280
					}}
				>
					<Switch>
						{RouteConfig.routes &&
							RouteConfig.routes.map((layoutRouteConfig: IRouteConfig) => (
								<CheckRoute {...layoutRouteConfig} />
							))}
					</Switch>
				</Content>
			</Layout>
		</Layout>
	)
}

export default LayoutPage
