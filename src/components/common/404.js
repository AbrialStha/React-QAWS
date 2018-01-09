import React, { Component } from 'react'
import pic from '../../Assets/404-venn.jpg'

class PageNotFound extends Component {
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="card page_not_found">
                <img alt="404-venn" src={pic} width='300' />
                <div className="card-block">
                    <h3 className="card-title">Page Not Found<hr /></h3>
                    <p className="card-text justify-content-end">
                        The page you are looking for doesn't exist or some other error occured.
                        <br /><br />
                        <button className="btn btn-raised btn-primary" onClick={this.goBack}>Go Back</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default PageNotFound