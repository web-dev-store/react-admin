/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import {
	QUERY_PRODUCT_SAGA,
	REQUEST,
	QUERY_PRODUCT_SUCCESS,
	QUERY_PRODUCT_FAILURE
} from './constants'
import { query } from '../../services/product'

function* queryProduct({ payload }: any) {
	yield put({
		type: REQUEST
	})
	try {
		const res = yield call(query, {
			...payload.queryParams,
			...payload.pagination
		})
		yield put({
			type: QUERY_PRODUCT_SUCCESS,
			payload: {
				products: res.data,
				queryParams: payload.queryParams || {},
				pagination: {
					total: res.total,
					pageSize: payload.pagination.pageSize,
					current: payload.pagination.current || 1
				}
			}
		})
	} catch (error) {
		yield put({
			type: QUERY_PRODUCT_FAILURE
		})
	}
}

function* gridPageSaga() {
	yield takeEvery(QUERY_PRODUCT_SAGA, queryProduct)
}

export default gridPageSaga
