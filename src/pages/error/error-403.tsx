/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Button, Result } from 'antd'

const Error403: React.FC = () => {
	return (
		<Result
			status="403"
			title="403"
			subTitle="Sorry, you are not authorized to access this page."
			extra={<Button type="primary">Back Home</Button>}
		/>
	)
}

export default Error403
