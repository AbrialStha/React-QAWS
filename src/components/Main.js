import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/Login'
import Delete from './Delete'

const Main = () => {
    return (
        <div className="area">
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Delete} />
            </Switch>
        </div>
    )
}

export default Main