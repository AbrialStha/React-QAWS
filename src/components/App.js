import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './Main'
import Login from './login/Login'
import Delete from './Delete'
import requireAuth from '../utils/requireAuth'
import Board from './Board/Board'
import Create from './Create/Create'
import Profile from './Profile/Profile'
import PageNotFound from './common/404'

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Main>
                        <Switch>
                            <Route exact path='/profile' component={requireAuth(Profile)} />
                            <Route exact path='/board' component={requireAuth(Board)} />
                            <Route exact path='/create' component={requireAuth(Create)} />
                            <Route exact path='/delete' component={requireAuth(Delete)} />
                            <Route component={requireAuth(PageNotFound)} />
                        </Switch>
                    </Main>
                </Switch>
            </BrowserRouter >
        </Provider>
    )
}

export default App