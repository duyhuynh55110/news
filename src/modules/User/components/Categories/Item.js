import React from 'react';
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom"

const Item = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                <img src={props.img} alt="" />
                <div className={(props.categoryType)? props.categoryType: "catagory-title"}>
                    <Link to={props.path}> 
                        <h5> {props.name} </h5>
                    </Link>
                </div>
            </div>          
        </div>
    );
}

export default withRouter(Item)