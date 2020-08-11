/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Route } from 'react-router-dom'

import { IRouteConfig } from './routes'
import getCheckRouteComponent from './getCheckRouteComponent'
import ErrorBoundary from '../components/ErrorBoundary'

const CheckRoute: React.FC<IRouteConfig> = (props) => {
	const { component: Component, ...restProps } = props
	const RouteComponent = getCheckRouteComponent(props)

	return (
		<ErrorBoundary>
			<Route
				{...restProps}
				render={(props) => <RouteComponent {...props} {...restProps} />}
			/>
		</ErrorBoundary>
	)
}

export default CheckRoute
