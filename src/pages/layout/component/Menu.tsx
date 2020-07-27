/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu as AntMenu } from 'antd'
import { MenuMode } from 'antd/lib/menu'

export interface IMenuProps {
	type: string
	mode: MenuMode
	routes: any
}

const Menu: React.FC<IMenuProps> = (props) => {
	const location = useLocation()
	const { type, mode, routes } = props

	return (
		<AntMenu
			theme={type === 'default' ? 'light' : 'dark'}
			mode={mode}
			selectedKeys={[location.pathname]}
		>
			{routes.map(
				(item: any) =>
					item.menu && (
						<AntMenu.Item key={`/${item.key}`} icon={<item.icon />}>
							<Link to={item.path}>{item.name}</Link>
						</AntMenu.Item>
					)
			)}
		</AntMenu>
	)
}

export default Menu
