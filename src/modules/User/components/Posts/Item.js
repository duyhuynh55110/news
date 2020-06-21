import React, { Component } from 'react';

// Styles
import "./assets/scss/item.scss"

class ItemPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="list-blog single-post d-sm-flex wow fadeInUpBig" 
            data-wow-delay=".2s">
                {/* Post Thumb */}
                <div className="post-thumb">
                    <img src="img/blog-img/6.jpg" alt="" />
                </div>
                
                {/* Post Content */}
                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author-date-area d-flex">
                            {/* Post Author */}
                            <div className="post-author">
                                <a href="#">By Marian</a>
                            </div>
                            {/* Post Date */}
                            <div className="post-date">
                                <a href="#">May 19, 2017</a>
                            </div>
                        </div>
                        {/* Post Comment & Share Area */}
                        <div className="post-comment-share-area d-flex">
                            {/* Post Favourite */}
                            <div className="post-favourite">
                                <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> 10</a>
                            </div>
                            {/* Post Comments */}
                            <div className="post-comments">
                                <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> 12</a>
                            </div>
                            {/* Post Share */}
                            <div className="post-share">
                                <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <h4 className="post-headline">The 10 Best Bars By The Seaside In Blackpool, UK</h4>
                    </a>
                    <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <a href="#" className="read-more">Continue Reading..</a>
                </div>
            </div>
        )
    }
} 

export default ItemPost