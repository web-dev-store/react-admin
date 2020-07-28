/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import './ContentHeader.css'

const LayoutContentHeader: React.FC = () => {
	const { pathname } = useLocation()
	const bcs = pathname.split('/')

	return (
		<div className="layout-content-header">
			<Breadcrumb>
				<Breadcrumb.Item>首页</Breadcrumb.Item>
				{bcs.map(
					(item: string, index: number) =>
						item && <Breadcrumb.Item key={index + item}>{item}</Breadcrumb.Item>
				)}
			</Breadcrumb>
		</div>
	)
}

export default LayoutContentHeader
