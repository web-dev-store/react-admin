/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import Loadable from 'react-loadable'

import PageLoading from './PageLoading'

export default (loader: any, loading = PageLoading) => {
	return Loadable({
		loader,
		loading
	})
}
