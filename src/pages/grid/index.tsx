/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Link, Switch } from 'react-router-dom'
import ChildRoute from '../../routes/ChildRoute'

const Grid: React.FC<any> = (props) => {
	const { routes } = props
	return (
		<>
			<h1>Grid</h1>
			<Link to="/grid/info/1">Click</Link>
			<br />
			<Link to="/grid/info/2">Click</Link>
			<Switch>
				<ChildRoute children={routes} />
			</Switch>
		</>
	)
}

export default Grid
