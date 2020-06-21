import React from 'react';
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
            <img src={props.image} alt="" />
            <div className="catagory-title">
                <Link to={props.path}> 
                    <h5> {props.name} </h5>
                </Link>
            </div>
        </div>
    );
}

export default withRouter(Item)