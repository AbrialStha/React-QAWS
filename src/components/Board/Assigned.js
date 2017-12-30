import React, { Component } from 'react'

class Assigned extends Component {
    render() {
        return (
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header card-header-icon">
                            <i class="material-icons">bookmark</i>
                        </div>
                        <h4 className="card-title">Assigned To me</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Due Date</th>
                                    <th>Reporter</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Assigned