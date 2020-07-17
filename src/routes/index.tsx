/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loadable from '../utils/loadable'
import Layout from '../pages/layout'
import Login from '../pages/login'
import Private from './private'

export interface RouteType {
	path?: string
	component: any
	auth?: any
}

export const routes: Array<RouteType> = [
	{
		path: '/welcome',
		component: Loadable(() => import('../pages/welcome'))
	},
	{
		path: '/dashboard',
		component: Loadable(() => import('../pages/dashboard'))
	},
	{
		path: '/form',
		component: Loadable(() => import('../pages/form'))
	},
	{
		path: '/grid',
		component: Loadable(() => import('../pages/grid'))
	},
	{
		path: '/detail',
		component: Loadable(() => import('../pages/detail'))
	},
	{
		path: '/result',
		component: Loadable(() => import('../pages/result'))
	},
	{
		path: '/error',
		component: Loadable(() => import('../pages/error'))
	},
	{
		component: Loadable(() => import('../pages/error/error-404'))
	}
]

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Private path="/" component={Layout} />
			</Switch>
		</Router>
	)
}
