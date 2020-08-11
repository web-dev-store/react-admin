/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Result } from 'antd'

export interface IErrorPageProps {
	tilte?: string
	subTitle?: string
	extra?: React.ReactNode
}

const ErrorPage: React.FC<IErrorPageProps> = (props) => {
	return (
		<Result
			status="error"
			title={props.tilte}
			subTitle={props.subTitle}
			extra={props.extra}
		>
			{props.children}
		</Result>
	)
}

ErrorPage.defaultProps = {
	tilte: 'Error Page',
	subTitle: 'Sorry, something went wrong.'
}

export default ErrorPage
