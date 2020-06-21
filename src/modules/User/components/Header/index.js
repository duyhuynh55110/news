import React from 'react'
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom"

//routes
import routes from "../../../../common/user_routes"

// render social links
var renderSocials = () => {
    // Links 
    var links = [
        <i className="fa fa-facebook" aria-hidden="true"></i>,
        <i className="fa fa-twitter" aria-hidden="true"></i>,
        <i className="fa fa-linkedin" aria-hidden="true"></i>,
        <i className="fa fa-skype" aria-hidden="true"></i>,
        <i className="fa fa-dribbble" aria-hidden="true"></i>,
    ];

    let html = links.map(e => {
        return <Link to="#"> {e} </Link>
    });

    return html;
}

// render links
var renderLinks = () => {
    let links = routes.filter(e => { return e.menu != undefined });
    
    // Sort
    links.sort((a, b) => { return a.menu - b.menu });

    let html = links.map(e => {
        return (
            <li className="nav-item">
               <Link className="nav-link" to={e.path} key={e.key}> {e.name} </Link>
            </li>
        )
    });

    return html;
}

const Header = () => {
    return (
        <>   
            {/* Preloader Start */}
            <div id="preloader">
                <div className="yummy-load"></div>
            </div>
        
            <div className="top_header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6">
                            {/*  Top Social bar start */}
                            <div className="top_social_bar">
                                { renderSocials() }
                            </div>
                        </div>
                        {/*  Login Register Area */}
                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <a href="register.html">Sing in</a>
                                    </div>
                                    <div className="register">
                                        <a href="register.html">Sing up</a>
                                    </div>
                                </div>
                                {/* Search Button Area */}
                                <div className="search_button">
                                    <a className="searchBtn" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                </div>
                                {/* Search Form */}
                                <div className="search-hidden-form">
                                    <form action="#" method="get">
                                        <input type="search" name="search" id="search-anything" placeholder="Search Anything..." />
                                        <input type="submit" value="" className="d-none" />
                                        <span className="searchBtn"><i className="fa fa-times" aria-hidden="true"></i></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Header */}
            <header className="header_area">
                <div className="container">
                    <div className="row">
                        {/* Logo Area Start */}
                        <div className="col-12">
                            <div className="logo_area text-center">
                                <a href="index.html" className="yummy-logo">Yummy Blog</a>
                            </div>
                        </div>
                    </div>

                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                            {/* Menu Area Start */}
                            <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                <ul className="navbar-nav" id="yummy-nav">
                                    { renderLinks() }
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                            <a className="dropdown-item" href="index.html">Home</a>
                                            <a className="dropdown-item" href="archive.html">Archive</a>
                                            <a className="dropdown-item" href="single.html">Single Blog</a>
                                            <a className="dropdown-item" href="static.html">Static Page</a>
                                            <a className="dropdown-item" href="contact.html">Contact</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
}

export default withRouter(Header);