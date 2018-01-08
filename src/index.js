import React from 'react';
import ReactDOM from 'react-dom'
import './Assets/style.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers/rootReducers'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/AuthActions'

let store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

if (localStorage.Authorization && localStorage.user) {
    setAuthorizationToken(localStorage.Authorization)
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
