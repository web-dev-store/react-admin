/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import { Button, Result } from 'antd'

export interface IErrorBoundaryProps {
	errorShow?: React.ReactNode
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
	state = { hasError: false }

	static getDerivedStateFromError(error: any) {
		return { hasError: true }
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log('---------- catch component render error ----------')
		console.log(error)
		console.log(errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return this.props.errorShow ? (
				this.props.errorShow
			) : (
				<Result
					status="error"
					title="Uncatch Error"
					subTitle="Sorry, something went wrong."
					extra={<Button type="primary">Back Home</Button>}
				/>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
