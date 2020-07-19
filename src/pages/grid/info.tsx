/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'

const GridInfo: React.FC<any> = (props) => {
	const { match } = props
	return <h1>Info, params: {match.params.id}</h1>
}

export default GridInfo
