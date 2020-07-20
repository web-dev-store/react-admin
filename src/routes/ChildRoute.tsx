/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'

import { IRouteConfig } from './routes'
import CheckRoute from './CheckRoute'

export interface IChildRoute {
	children: any
}

const ChildRoute: React.FC<IChildRoute> = (props) => {
	const { children } = props

	return children.map((child: IRouteConfig) => <CheckRoute {...child} />)
}

export default ChildRoute
