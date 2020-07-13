import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            img: this.props.img,
            author: this.props.author,
            created_at: this.props.created_at,
            desc: this.props.desc || null,
            reading: this.props.reading || null,
        }
    }

    continueReading = () => {
        if(this.state.reading != null) 
            return <a href="#" className="read-more">Continue Reading..</a>
        else 
            return this.state.reading    
    }

    render() {
        return (
            <div className="single-post wow fadeInUp" data-wow-delay=".2s">
                {/* Post Thumb */}
                <div className="post-thumb">
                    <img src={this.state.img} alt="" />
                </div>

                {/* Post Content */}
                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author-date-area d-flex">
                            {/* Post Author */}
                            <div className="post-author">
                                <a href="#"> {this.state.author} </a>
                            </div>
                            {/* Post Date */}
                            <div className="post-date">
                                <a href="#"> {this.state.created_at} </a>
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
                        <h4 className="post-headline"> 
                            {this.state.name}
                        </h4>
                    </a>
                    <p> {this.state.desc} </p>
                    { this.continueReading() }
                </div>
            </div>
        );
    }
}

export default Post;