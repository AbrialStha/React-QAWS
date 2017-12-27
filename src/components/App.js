import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Login from './login/Login'
import Delete from './Delete'
import Delete2 from './Delete2'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Main>
                    <Route path='/delete' component={Delete} />
                    <Route path='/delete2' component={Delete2} />
                </Main>
            </Switch>
        </BrowserRouter >
    )
}

export default App