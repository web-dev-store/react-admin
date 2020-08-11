/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import * as React from 'react'
import ReactEcharts from 'echarts-for-react'

const EchartsWidget: React.FC<any> = (props) => {
	return <ReactEcharts {...props} className={'react_for_echarts'} />
}

export default EchartsWidget
