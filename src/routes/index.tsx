/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loadable from '../utils/Loadable'
import RouteConfig from './routes'
import CheckRoute from './CheckRoute'

const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/login"
					component={Loadable(() =>
						import(/* webpackChunkName: 'login' */ '../pages/login')
					)}
				/>

				<CheckRoute {...RouteConfig} />
			</Switch>
		</Router>
	)
}

export default Routes
