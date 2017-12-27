import React, { Component } from 'react'

class Delete extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-header card-header-icon">
                        <i className="material-icons">directions_run</i>
                    </div>
                    <h4 className="card-title">Task In Hand</h4>
                    <table className="table">
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
                                    <span className="badge badge-danger">High</span>
                                </td>
                                <td className="text-success">
                                    Done
                                <div className="btn-group pull-xs-right">
                                        <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-angle-double-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="mw2">
                                            <button className="dropdown-item" type="button">In Progress</button>
                                            <button className="dropdown-item" type="button">Halted</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-raised btn-info">
                                        Resolve
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Complete automation test</td>
                                <td>17 Dec, 2017</td>
                                <td>Karishma Shakya</td>
                                <td>
                                    <span className="badge badge-primary">Normal</span>
                                </td>
                                <td className="text-warning">
                                    In Progress
                                <div className="btn-group pull-xs-right">
                                        <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-angle-double-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="mw2">
                                            <button className="dropdown-item" type="button">Done</button>
                                            <button className="dropdown-item" type="button">Halted</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-raised btn-info">
                                        Resolve
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>create the project test run report</td>
                                <td>17 Dec, 2017</td>
                                <td>Karishma Shakya</td>
                                <td>
                                    <span className="badge badge-primary">Normal</span>
                                </td>
                                <td className="text-danger">
                                    Halted
                                <div className="btn-group pull-xs-right">
                                        <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="mw2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-angle-double-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="mw2">
                                            <button className="dropdown-item" type="button">In Progress</button>
                                            <button className="dropdown-item" type="button">Done</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-raised btn-info">
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