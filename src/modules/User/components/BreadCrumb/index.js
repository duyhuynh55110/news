import React, { Component } from 'react';
import "./styles.scss"

class BreadCrumb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name
        }
    }

    render() {
        return (
            <>
                {/* Title */}
                <div className="breadcumb-area">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2> {this.state.name} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub direct */}
                <div className="breadcumb-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Archive</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Single Post Blog</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BreadCrumb