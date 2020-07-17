/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

function defaultLoading() {
	return <Spin />
}

export default (loader: any, loading = defaultLoading) => {
	return Loadable({
		loader,
		loading
	})
}
