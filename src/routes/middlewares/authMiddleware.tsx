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

export default function authMiddleware() {
	// use this code will fix, but need change function name to useCheckAuth
	// const { userInfo } = useSelector(({ user }: any) => user)

	return (next: any) => (currentRoute: IRouteConfig) => {
		// FIXME:
		// 1. set checkLogin before checkAuth
		// 2. const { userInfo } = useSelector(({ user }: any) => user) here
		// 3. checkLogin return <Redirect/>
		// 4. throw Rendered fewer hooks than expected. This may be caused by an accidental early return statement
		const { userInfo } = useSelector(({ user }: any) => user)
		if (currentRoute.authority) {
			if (
				Array.isArray(currentRoute.authority) &&
				!currentRoute.authority.includes(userInfo.username)
			)
				return () => (
					<Redirect
						to={{
							pathname: '/403'
						}}
					/>
				)
		}
		return next(currentRoute)
	}
}
