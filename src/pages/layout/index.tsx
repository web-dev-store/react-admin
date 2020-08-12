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
import { Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const LayoutPage: React.FC<any> = (props) => {
	if (props.location.pathname === '/') props.history.push('/welcome')

	const dispatch = useDispatch()
	const global = useSelector(({ global }: any) => global)

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
				<>
					<Radio.Group
						defaultValue={global.lang}
						size="small"
						onChange={(e) =>
							dispatch({ type: 'CHANGE_LANG', payload: e.target.value })
						}
					>
						<Radio.Button value="zh">ZH</Radio.Button>
						<Radio.Button value="en">EN</Radio.Button>
					</Radio.Group>
					<span className="header-settings">
						<Dropdown />
					</span>
				</>
			}
		/>
	)
}

export default LayoutPage
