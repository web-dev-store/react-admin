/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Layout } from 'antd'

const { Sider } = Layout

export interface ILayoutSiderMenuProps {
	type: string
	collapsed: boolean
	logo?: React.ReactNode
	menu?: React.ReactNode
	siderWidth?: number
}

const LayoutSiderMenu: React.FC<ILayoutSiderMenuProps> = (props) => {
	const { type, collapsed, logo, menu, siderWidth } = props

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			width={siderWidth}
			theme={type === 'default' ? 'light' : 'dark'}
		>
			{logo && <div className="layout-header-logo">{logo}</div>}
			<div className="layout-header-menu">{menu}</div>
		</Sider>
	)
}

export default LayoutSiderMenu
