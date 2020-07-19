/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { IRouteConfig } from './routes'

const PrivateRoute: React.FC<IRouteConfig> = (props) => {
	const { auth, component: Component, ...restProps } = props
	const { isLogin } = useSelector(({ user }: any) => user)
	let shouldControl = false

	if (auth) {
		if (typeof auth === 'function') {
			shouldControl = auth()
		}
		if (Object.prototype.toString.call(auth) === '[object Boolean]') {
			shouldControl = auth as boolean
		}
	}

	return shouldControl ? (
		<Route
			{...restProps}
			render={(props) =>
				isLogin ? (
					Component && <Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location.pathname }
						}}
					/>
				)
			}
		/>
	) : (
		<Route
			{...restProps}
			render={(props) => Component && <Component {...props} {...restProps} />}
		/>
	)
}

export default PrivateRoute
