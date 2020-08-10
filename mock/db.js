/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

let Mock = require('mockjs')
let Random = Mock.Random

module.exports = function () {
	let data = {
		products: {
			products: [],
			total: 0
		}
	}

	for (let i = 0; i < 100; i++) {
		data.products.products.push({
			id: Random.guid(),
			name: Random.cword(3, 10),
			type: Random.word(3, 10),
			count: Random.integer(0, 200),
			country: Random.province(),
			isHot: Random.boolean(),
			createTime: Random.date('yyyy-MM-dd'),
			user: Random.name()
		})
	}
	data.products.total = 99

	return data
}
