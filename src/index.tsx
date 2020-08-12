/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './pages/App'
import store, { persistor } from './redux/store'

import * as serviceWorker from './pwa/serviceWorker'

import './index.css'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'

const lang: any = {
	zh: zhCN,
	en: enUS
}

const Root: React.FC = () => {
	const global = useSelector(({ global }: any) => global)
	return (
		<ConfigProvider locale={lang[global.lang]}>
			<App />
		</ConfigProvider>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Root />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
