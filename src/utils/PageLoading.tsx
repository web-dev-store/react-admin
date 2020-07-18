/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const PageLoading: React.FC = () => {
	useEffect(() => {
		NProgress.start()
		return () => {
			NProgress.done()
		}
	}, [])
	return null
}

export default PageLoading
