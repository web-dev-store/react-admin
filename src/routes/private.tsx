/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export interface PrivateRouteProps {
	isLogin?: boolean
	component: any
	path?: string
}

export default ({ component: Component, ...restProps }: PrivateRouteProps) => {
	const { isLogin } = useSelector(({ user }: any) => user)
	return (
		<Route
			{...restProps}
			render={(props) =>
				isLogin ? (
					<Component {...props} />
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
	)
}
