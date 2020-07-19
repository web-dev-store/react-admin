/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { RouteProps } from 'react-router-dom'

import Loadable from '../utils/Loadable'

export interface IRouteConfig extends RouteProps {
	key: string
	auth?: boolean | (() => boolean)
	routes?: Array<IRouteConfig>
}

const routeConfig: IRouteConfig = {
	path: '/',
	key: 'root',
	component: Loadable(() =>
		import(/* webpackChunkName: 'layout' */ '../pages/layout')
	),
	auth: true,
	routes: [
		{
			path: '/welcome',
			key: 'welcome',
			exact: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'welcome' */ '../pages/welcome')
			)
		},
		{
			path: '/dashboard',
			key: 'dashboard',
			component: Loadable(() =>
				import(/* webpackChunkName: 'dashboard' */ '../pages/dashboard')
			)
		},
		{
			path: '/form',
			key: 'form',
			component: Loadable(() =>
				import(/* webpackChunkName: 'form' */ '../pages/form')
			)
		},
		{
			path: '/grid',
			key: 'grid',
			component: Loadable(() =>
				import(/* webpackChunkName: 'grid' */ '../pages/grid')
			),
			routes: [
				{
					path: '/grid/info/:id',
					key: 'grid-info',
					component: Loadable(() =>
						import(/* webpackChunkName: 'grid-info' */ '../pages/grid/info')
					)
				}
			]
		},
		{
			path: '/detail',
			key: 'detail',
			component: Loadable(() =>
				import(/* webpackChunkName: 'detail' */ '../pages/detail')
			)
		},
		{
			path: '/result',
			key: 'result',
			component: Loadable(() =>
				import(/* webpackChunkName: 'result' */ '../pages/result')
			)
		},
		{
			path: '/error',
			key: 'error',
			component: Loadable(() =>
				import(/* webpackChunkName: 'error' */ '../pages/error')
			)
		},
		{
			key: 'error-404',
			component: Loadable(() =>
				import(/* webpackChunkName: 'error-404' */ '../pages/error/error-404')
			)
		}
	]
}

export default routeConfig
