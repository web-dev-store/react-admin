/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { QUERY_PRODUCT_SAGA } from './constants'
import { IGridPageState } from './reducer'

export const query = (params: IGridPageState) => ({
	type: QUERY_PRODUCT_SAGA,
	payload: params
})
