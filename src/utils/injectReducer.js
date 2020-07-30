import React from 'react'
import { ReactReduxContext } from 'react-redux'
import getInjectors from './reducerInjectors'

const useInjectReducer = ({ key, reducer }) => {
	const context = React.useContext(ReactReduxContext) // root provide context
	React.useEffect(() => {
		getInjectors(context.store).injectReducer(key, reducer) // eslint-disable-next-line
	}, [])
}

export { useInjectReducer }
