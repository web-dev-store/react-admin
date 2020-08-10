/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import request from '../request'

export interface IProduct {
	id: string
	name: string
	type: string
	count: number
	createTime: string
	user: string
}

export interface IQueryProductParams {
	name?: string
	type?: string
	count?: number
	country?: string
	isHot?: boolean
	beginTime?: string
	endTime?: string
	user?: string
	current: number
	pageSize: number
}

export async function query(params: IQueryProductParams) {
	return await request('http://localhost:3001/products', {
		method: 'get'
	})
}
