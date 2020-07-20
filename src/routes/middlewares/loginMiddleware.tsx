/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { IRouteConfig } from '../routes'

export default function loginMiddleware() {
	return (next: any) => (currentRoute: IRouteConfig) => {
		const { isLogin } = useSelector(({ user }: any) => user)
		const { login } = currentRoute

		if (login) {
			if (!isLogin)
				return () => (
					<Redirect
						to={{
							pathname: '/login',
							state: {
								from: currentRoute.location && currentRoute.location.pathname
							}
						}}
					/>
				)
		}

		return next(currentRoute)
	}
}
