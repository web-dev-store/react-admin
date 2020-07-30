/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import { all } from 'redux-saga/effects'
import loginSaga from '../pages/login/sagas'
import gridPageSaga from '../pages/grid/sagas'

export default function* rootSaga() {
	yield all([loginSaga(), gridPageSaga()])
}
