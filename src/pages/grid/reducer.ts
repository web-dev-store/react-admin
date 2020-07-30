/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import {
	REQUEST,
	QUERY_PRODUCT_SUCCESS,
	QUERY_PRODUCT_FAILURE
} from './constants'
import { IPagination } from '../../@types'
import { IProduct, IQueryProductParams } from '../../services/product'

export interface IGridPageState {
	products?: Array<IProduct>
	queryParams: IQueryProductParams | {}
	pagination: IPagination
}

const gridPageStateInit: IGridPageState = {
	products: [],
	queryParams: {},
	pagination: {
		total: 0,
		current: 1,
		pageSize: 2
	}
}

const gridPageReducer = (
	state = { ...gridPageStateInit },
	{ type, payload }: any
) => {
	switch (type) {
		case REQUEST:
			return { ...state, loading: true }
		case QUERY_PRODUCT_SUCCESS:
			return {
				...state,
				...payload,
				loading: false
			}
		case QUERY_PRODUCT_FAILURE:
			return { ...state, loading: false }
		default:
			return state
	}
}

export default gridPageReducer
