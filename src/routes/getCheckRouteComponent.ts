/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { RouteComponentProps } from 'react-router-dom'

import loginMiddleware from './middlewares/loginMiddleware'
import authMiddleware from './middlewares/authMiddleware'

import { IRouteConfig } from './routes'

const checkSuccessComponent = (
	currentRoute: IRouteConfig
):
	| React.ComponentType<RouteComponentProps<any>>
	| React.ComponentType<any>
	| undefined => currentRoute.component

function applyRouteMiddleware(middlewares: Array<any>) {
	return (currentRoute: IRouteConfig) => {
		const middlewaresChain = middlewares.map((middleware) =>
			middleware(currentRoute)
		)

		return compose(...middlewaresChain)(() =>
			checkSuccessComponent(currentRoute)
		)(currentRoute)
	}
}

function compose(...funcs: Array<any>) {
	if (funcs.length === 0) return (arg: any) => arg
	if (funcs.length === 1) return funcs[0]
	return funcs.reduce((a, b) => (...args: Array<any>) => a(b(...args)))
}

export default function getCheckRouteComponent(currentRoute: IRouteConfig) {
	return applyRouteMiddleware([authMiddleware, loginMiddleware])(currentRoute)
}
