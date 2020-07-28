/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Switch } from 'react-router-dom'

import ChildRoute from '../../routes/ChildRoute'

const DashBoard: React.FC<any> = (props) => {
	const { routes } = props
	return (
		<Switch>
			<ChildRoute children={routes} />
		</Switch>
	)
}

export default DashBoard
