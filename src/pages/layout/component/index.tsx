/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useState } from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import LayoutHeader from './Header'
import LayoutSiderMenu from './SiderMenu'
import LayoutContent from './Content'
import Menu from './Menu'

export interface ILayoutComponentProps {
	type: string // inline / inner / default
	logo?: React.ReactNode
	routeConfig: any
	rightContentRender?: React.ReactNode
	siderWidth?: number
}

const DefaultTemp = (props: ILayoutComponentProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const { type, logo, routeConfig, rightContentRender, siderWidth } = props
	return (
		<Layout id="layout" className="layout">
			<LayoutHeader
				type={type}
				logo={logo}
				rightContentRender={rightContentRender}
			>
				{React.createElement(
					collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
					{
						className: 'trigger',
						style: { color: '#ffffff' },
						onClick: () => setCollapsed(!collapsed)
					}
				)}
			</LayoutHeader>
			<Layout className="site-layout">
				<LayoutSiderMenu
					type={type}
					collapsed={collapsed}
					menu={<Menu routes={routeConfig.routes} type={type} mode="inline" />}
					siderWidth={siderWidth}
				/>
				<LayoutContent type={type} routeConfig={routeConfig} />
			</Layout>
		</Layout>
	)
}

const InnerTemp = (props: ILayoutComponentProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const { type, logo, routeConfig, rightContentRender, siderWidth } = props
	return (
		<Layout id="layout" className="layout">
			<LayoutSiderMenu
				type={type}
				collapsed={collapsed}
				menu={<Menu routes={routeConfig.routes} type={type} mode="inline" />}
				logo={logo}
				siderWidth={siderWidth}
			/>
			<Layout className="site-layout">
				<LayoutHeader type={type} rightContentRender={rightContentRender}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: () => setCollapsed(!collapsed)
						}
					)}
				</LayoutHeader>
				<LayoutContent type={type} routeConfig={routeConfig} />
			</Layout>
		</Layout>
	)
}

const InlineTemp = (props: ILayoutComponentProps) => {
	const { type, logo, routeConfig, rightContentRender } = props
	return (
		<Layout id="layout" className="layout">
			<LayoutHeader
				type={type}
				menu={
					<Menu routes={routeConfig.routes} type={type} mode="horizontal" />
				}
				logo={logo}
				rightContentRender={rightContentRender}
			/>
			<Layout className="site-layout">
				<LayoutContent type={type} routeConfig={routeConfig} />
			</Layout>
		</Layout>
	)
}

const LayoutComponent: React.FC<ILayoutComponentProps> = (props) => {
	const { type } = props
	switch (type) {
		case 'inner':
			return <InnerTemp {...props} />
		case 'inline':
			return <InlineTemp {...props} />
		case 'default':
			return <DefaultTemp {...props} />
		default:
			return <DefaultTemp {...props} />
	}
}

export default LayoutComponent
