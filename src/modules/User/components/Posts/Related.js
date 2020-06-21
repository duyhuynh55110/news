import React, { Component } from 'react';

class RelatedPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return(
            <div className="single-post">
                {/* Post Thumb */}
                <div className="post-thumb">
                    <img src="img/blog-img/5.jpg" alt="" />
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
                    </div>
                    <a href="#">
                        <h6>The Top Breakfast And Brunch Spots In Hove</h6>
                    </a>
                </div>
            </div>
        )
    }
}
export default RelatedPost