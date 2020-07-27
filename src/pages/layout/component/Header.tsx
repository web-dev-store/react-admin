/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Layout } from 'antd'

import './Header.css'

const { Header } = Layout

export interface ILayoutHeaderProps {
	type: string
	logo?: React.ReactNode
	rightContentRender?: React.ReactNode
	menu?: React.ReactNode
}

const LayoutHeader: React.FC<ILayoutHeaderProps> = (props) => {
	const renderLogo = (logo: React.ReactNode, type: string) =>
		!logo || type === 'inner' ? null : (
			<div className="layout-header-logo">{logo}</div>
		)

	const { type, logo, rightContentRender, menu } = props

	return (
		<Header
			className="layout-header"
			style={{
				paddingLeft: type !== 'inline' ? 0 : 50,
				backgroundColor: type === 'inner' ? '#ffffff' : '#001529'
			}}
		>
			{renderLogo(logo, type)}
			{props.children}
			<div className="layout-header-menu">{menu}</div>
			<div className="layout-header-right">{rightContentRender}</div>
		</Header>
	)
}

export default LayoutHeader
