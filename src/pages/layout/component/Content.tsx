/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Layout } from 'antd'
import { Switch } from 'react-router-dom'

import { IRouteConfig } from '../../../routes/routes'
import CheckRoute from '../../../routes/CheckRoute'
import './Header.css'

const { Content } = Layout

export interface ILayoutContentProps {
	type: string
	routeConfig: any
}

const LayoutContent: React.FC<ILayoutContentProps> = (props) => {
	const { routeConfig } = props

	return (
		<Content
			className="site-layout-background"
			style={{
				margin: '24px 16px',
				padding: 24,
				minHeight: 'unset'
			}}
		>
			<Switch>
				{routeConfig.routes &&
					routeConfig.routes.map((layoutRouteConfig: IRouteConfig) => (
						<CheckRoute {...layoutRouteConfig} />
					))}
			</Switch>
		</Content>
	)
}

export default LayoutContent
