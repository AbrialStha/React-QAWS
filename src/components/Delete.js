import React, { Component } from 'react'

class Delete extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <div class="card-header card-header-icon">
                        <i class="material-icons">directions_run</i>
                    </div>
                    <h4 class="card-title">Task In Hand</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Reporter</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Resolve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Write test code for new project FCC</td>
                                <td>17 Dec, 2017</td>
                                <td>Karishma Shakya</td>
                                <td>
                                    <span class="badge badge-danger">High</span>
                                </td>
                                <td class="text-success">
                                    Done
                                <div class="btn-group pull-xs-right">
                                        <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-angle-double-down"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="mw2">
                                            <button class="dropdown-item" type="button">In Progress</button>
                                            <button class="dropdown-item" type="button">Halted</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-raised btn-info">
                                        Resolve
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Complete automation test</td>
                                <td>17 Dec, 2017</td>
                                <td>Karishma Shakya</td>
                                <td>
                                    <span class="badge badge-primary">Normal</span>
                                </td>
                                <td class="text-warning">
                                    In Progress
                                <div class="btn-group pull-xs-right">
                                        <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-angle-double-down"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="mw2">
                                            <button class="dropdown-item" type="button">Done</button>
                                            <button class="dropdown-item" type="button">Halted</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-raised btn-info">
                                        Resolve
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>create the project test run report</td>
                                <td>17 Dec, 2017</td>
                                <td>Karishma Shakya</td>
                                <td>
                                    <span class="badge badge-primary">Normal</span>
                                </td>
                                <td class="text-danger">
                                    Halted
                                <div class="btn-group pull-xs-right">
                                        <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-angle-double-down"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="mw2">
                                            <button class="dropdown-item" type="button">In Progress</button>
                                            <button class="dropdown-item" type="button">Done</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-raised btn-info">
                                        Resolve
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}
export default Delete