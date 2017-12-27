import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './Main'
import Login from './login/Login'
import Delete from './Delete'
import Delete2 from './Delete2'
import requireAuth from '../utils/requireAuth'

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Main>
                        <Route path='/delete' component={requireAuth(Delete)} />
                        <Route path='/delete2' component={requireAuth(Delete2)} />
                    </Main>
                </Switch>
            </BrowserRouter >
        </Provider>
    )
}

export default App