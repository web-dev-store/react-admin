/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'

import RouteConfig from '../../routes/routes'
import LayoutComponent from './component'
import Dropdown from './component/dropdown'
import './index.css'

const LayoutPage: React.FC<any> = (props) => {
	if (props.location.pathname === '/') props.history.push('/welcome')

	return (
		<LayoutComponent
			type="inner"
			routeConfig={RouteConfig}
			logo={
				<div className="logo" style={{ width: 199 }}>
					<h3>Hello</h3>
				</div>
			}
			rightContentRender={
				<span className="header-settings">
					<Dropdown />
				</span>
			}
		/>
	)
}

export default LayoutPage
