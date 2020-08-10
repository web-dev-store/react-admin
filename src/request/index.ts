/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import axios from 'axios'

const instance = axios.create({})

const request = (url: string, config: any) => {
	return instance.request({ url, ...config })
}

instance.interceptors.request.use(
	(config) => {
		console.log('---------- do something before request ----------')
		return config
	},
	(error) => {
		console.log('---------- do something by request error ----------')
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => {
		console.log('---------- do something by response ----------')
		return response
	},
	(error) => {
		console.log('---------- do something by response error ----------')
		return Promise.reject(error)
	}
)

export default request
