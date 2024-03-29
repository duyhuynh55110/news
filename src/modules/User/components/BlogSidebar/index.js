import React, { Component } from 'react';
import { connect } from 'react-redux';

// Helper
import {formatNumber} from "../../../../utils"

class BlogSideBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
         return (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="blog-sidebar mt-5 mt-lg-0">
                    {/* Single Widget Area */}
                    <div className="single-widget-area about-me-widget text-center">
                        <div className="widget-title">
                            <h6>About Me</h6>
                        </div>
                        <div className="about-me-widget-thumb">
                            <img src="img/about-img/1.jpg" alt="" />
                        </div>
                        <h4 className="font-shadow-into-light">Shopia Bernard</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                    </div>

                    {/* Single Widget Area */}
                    <div className="single-widget-area subscribe_widget text-center">
                        <div className="widget-title">
                            <h6>Subscribe &amp; Follow</h6>
                        </div>
                        <div className="subscribe-link">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    {/* Single Widget Area */}
                    <div className="single-widget-area popular-post-widget">
                        <div className="widget-title text-center">
                            <h6>Populer Post</h6>
                        </div>
                        { this.renderPosts() }
                    </div>
                    
                    {/* Single Widget Area */}
                    <div className="single-widget-area add-widget text-center">
                        <div className="add-widget-area">
                            <img src="img/sidebar-img/6.jpg" alt="" />
                            <div className="add-text">
                                <div className="yummy-table">
                                    <div className="yummy-table-cell">
                                        <h2>Cooking Book</h2>
                                        <p>Buy Book Online Now!</p>
                                        <a href="#" className="add-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Widget Area */}
                    <div className="single-widget-area newsletter-widget">
                        <div className="widget-title text-center">
                            <h6>Newsletter</h6>
                        </div>
                        <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                        <div className="newsletter-form">
                            <form action="#" method="post">
                                <input type="email" name="newsletter-email" id="email" placeholder="Your email" />
                                <button type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

    /**
     * Render posts
     */
    renderPosts = () => {
        let posts = this.props.postsPopular.filter((post, i) => {return i < 5}).map((post, i) => {
            return <div className="single-populer-post d-flex">
                        <img src={post.img} alt="" />
                        <div className="post-content">
                            <a href="#">
                                <h6>{post.name}</h6>
                            </a>
                            <p>{formatNumber(post.view)}</p>
                        </div>
                    </div>
        });

        return posts;
    }
}

var mapStateToProps = (state) => {
    return {
        postsPopular: state.postsPopular,
    }
}

export default connect(mapStateToProps)(BlogSideBar)
