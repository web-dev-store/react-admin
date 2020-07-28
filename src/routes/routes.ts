/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { RouteProps } from 'react-router-dom'
import {
	HomeOutlined,
	ShoppingOutlined,
	TableOutlined,
	FileAddOutlined,
	FormOutlined,
	HeartOutlined
} from '@ant-design/icons'

import Loadable from '../utils/Loadable'

export interface IRouteConfig extends RouteProps {
	key: string
	login?: boolean
	authority?: Array<string>
	routes?: Array<IRouteConfig>
	name: string
	icon?: React.ReactNode
	menu: boolean
}

const routeConfig: IRouteConfig = {
	path: '/',
	key: 'root',
	name: 'root',
	menu: false,
	component: Loadable(() =>
		import(/* webpackChunkName: 'layout' */ '../pages/layout')
	),
	login: true,
	routes: [
		{
			path: '/welcome',
			key: 'welcome',
			name: '首页',
			icon: HomeOutlined,
			menu: true,
			exact: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'welcome' */ '../pages/welcome')
			)
		},
		{
			path: '/dashboard',
			key: 'dashboard',
			name: 'Dashboard',
			icon: ShoppingOutlined,
			menu: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'dashboard' */ '../pages/dashboard')
			),
			routes: [
				{
					path: '/dashboard/a',
					key: 'dashboard-a',
					name: 'dashboard-a',
					icon: ShoppingOutlined,
					menu: true,
					component: Loadable(() =>
						import(
							/* webpackChunkName: 'dashboard-a' */ '../pages/dashboard/dashboard-a'
						)
					)
				},
				{
					path: '/dashboard/b',
					key: 'dashboard-b',
					name: 'dashboard-b',
					icon: ShoppingOutlined,
					menu: true,
					component: Loadable(() =>
						import(
							/* webpackChunkName: 'dashboard-b' */ '../pages/dashboard/dashboard-b'
						)
					)
				}
			]
		},
		{
			path: '/form',
			key: 'form',
			name: '表单',
			icon: TableOutlined,
			menu: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'form' */ '../pages/form')
			)
		},
		{
			path: '/grid',
			key: 'grid',
			name: '数据',
			icon: FileAddOutlined,
			menu: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'grid' */ '../pages/grid')
			),
			routes: [
				{
					path: '/grid/info/:id',
					key: 'grid-info',
					name: 'grid-info',
					menu: false,
					component: Loadable(() =>
						import(/* webpackChunkName: 'grid-info' */ '../pages/grid/info')
					)
				}
			]
		},
		{
			path: '/detail',
			key: 'detail',
			name: '详情',
			icon: FormOutlined,
			menu: true,
			authority: ['user'],
			component: Loadable(() =>
				import(/* webpackChunkName: 'detail' */ '../pages/detail')
			)
		},
		{
			path: '/result',
			key: 'result',
			name: '结果',
			icon: HeartOutlined,
			menu: true,
			authority: ['admin', 'user'],
			component: Loadable(() =>
				import(/* webpackChunkName: 'result' */ '../pages/result')
			)
		},
		{
			path: '/error',
			key: 'error',
			name: '错误',
			icon: HeartOutlined,
			menu: true,
			component: Loadable(() =>
				import(/* webpackChunkName: 'error' */ '../pages/error')
			)
		},
		{
			path: '/403',
			key: 'error-403',
			name: '403',
			menu: false,
			component: Loadable(() =>
				import(/* webpackChunkName: 'error-403' */ '../pages/error/error-403')
			)
		},
		{
			key: 'error-404',
			name: '404',
			menu: false,
			component: Loadable(() =>
				import(/* webpackChunkName: 'error-404' */ '../pages/error/error-404')
			)
		}
	]
}

export default routeConfig
