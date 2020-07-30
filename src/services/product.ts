/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

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

const productMock = [
	{
		id: '001',
		name: 'iPhone 7',
		type: 'iPhone',
		count: 10,
		country: 'USA',
		isHot: false,
		createTime: '2020-07-29',
		user: 'Tom'
	},
	{
		id: '002',
		name: 'iPhone SE2',
		type: 'iPhone',
		count: 7,
		country: 'USA',
		isHot: true,
		createTime: '2020-07-28',
		user: 'Evan'
	},
	{
		id: '003',
		name: 'Macbook pro 2020',
		type: 'Macbook',
		count: 0,
		country: 'USA',
		isHot: true,
		createTime: '2020-07-27',
		user: 'Jack'
	},
	{
		id: '004',
		name: 'Macbook pro 2020',
		type: 'Macbook',
		count: 0,
		country: 'CN',
		isHot: true,
		createTime: '2020-07-27',
		user: 'Jack'
	},
	{
		id: '005',
		name: 'iWatch S3',
		type: 'iWatch',
		count: 74,
		country: 'USA',
		isHot: true,
		createTime: '2020-06-01',
		user: 'Jack'
	},
	{
		id: '006',
		name: 'Macbook pro 2019',
		type: 'Macbook',
		count: 0,
		country: 'USA',
		isHot: false,
		createTime: '2020-05-21',
		user: 'Mary'
	},
	{
		id: '007',
		name: 'iPhone 11 Pro',
		type: 'iPhone',
		count: 30,
		country: 'USA',
		isHot: true,
		createTime: '2020-07-27',
		user: 'Jack'
	}
]

export async function query(params: IQueryProductParams) {
	return new Promise((reslove) => {
		setTimeout(() => {
			reslove({
				total: productMock.length,
				data: productMock.slice(
					(params.current - 1) * params.pageSize,
					params.current * params.pageSize
				)
			})
		}, 1000)
	})
}
