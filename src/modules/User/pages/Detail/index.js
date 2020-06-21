import React, { Component } from 'react'

// Components
import RelatedPost from "../../components/Posts/Related"
import BlogSidebar from "../../components/BlogSidebar"
import BreadCrumb from "../../components/BreadCrumb"

// Library
import OwlCarousel from "react-owl-carousel2"

// Styles
import "./styles.scss"


// Option owl carousel
const options = {
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    rewind: true,
    autoplay: true,
    margin: 30,
    loop: true,
    responsive: {
        320: {
            items: 1,
        },
        480: {
            items: 2,
        },
        760: {
            items: 3,
        },
    }
};

class Single extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <BreadCrumb name="Post Detail" />

                <single className="single_blog_area section_padding_80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="row no-gutters">

                                    {/* Media Socials */}
                                    <div className="col-2 col-sm-1">
                                        <div className="single-post-share-info mt-100">
                                            <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#" className="googleplus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            <a href="#" className="pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                
                                    <div className="col-10 col-sm-11">
                                        <div className="single-post">
                                            {/* Post Thumb */}
                                            <div className="post-thumb"> 
                                                <img src="img/blog-img/10.jpg" alt="" />
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
                                                    <h2 className="post-headline">Boil The Kettle And Make A Cup Of Tea Folks, This Is Going To Be A Big One!</h2>
                                                </a>
                                                <p>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                                <blockquote className="yummy-blockquote mt-30 mb-30">
                                                    <h5 className="mb-30">“Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.”</h5>
                                                    <h6 className="text-muted">Steven Jobs</h6>
                                                </blockquote>

                                                <h4>You Can Buy For Less Than A College Degree</h4>
                                                <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                                                <img className="br-30 mb-30" src="img/blog-img/11.jpg" alt="" />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                                <img className="br-30 mb-30" src="img/blog-img/12.jpg" alt="" />
                                                <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <img className="br-30 mb-30" src="img/blog-img/13.jpg" alt="" />
                                                <h4>You Can Buy For Less Than A College Degree</h4>
                                                <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                                <ul className="mb-30">
                                                    <li>1/3 cup Lonsectetur adipisicing elit.Lorem ipsum</li>
                                                    <li>1/2 cup Veniam, quis nostrud exercitation</li>
                                                    <li>Ut labore et dolore magna</li>
                                                    <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                                    <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                                    <li>Ut labore et dolore magna</li>
                                                    <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                                                </ul>

                                                <img className="br-30 mb-15" src="img/blog-img/14.jpg" alt="" />
                                            </div>
                                        </div>

                                        {/* Tags Area */}
                                        <div className="tags-area">
                                            <a href="#">Multipurpose</a>
                                            <a href="#">Design</a>
                                            <a href="#">Ideas</a>
                                        </div>

                                        {/* Related Post Area */}
                                        <div class="related-post-area section_padding_50">
                                            <h4 class="mb-30">Related post</h4>

                                            <OwlCarousel                             
                                                options={options}
                                                className="related-post-slider owl-carousel">
                                                    <RelatedPost 
                                                        name="Relate Product"                                       
                                                    />
                                                    <RelatedPost 
                                                        name="Relate Product"                                       
                                                    />
                                                    <RelatedPost 
                                                        name="Relate Product"                                       
                                                    />
                                                    <RelatedPost 
                                                        name="Relate Product"                                       
                                                    />
                                            </OwlCarousel>
                                        </div>

                                        {/* Comment Area Start */}
                                        <div className="comment_area section_padding_50 clearfix">
                                            <h4 className="mb-30">2 Comments</h4>

                                            <ol>
                                                {/* Single Comment Area */}
                                                <li className="single_comment_area">
                                                    <div className="comment-wrapper d-flex">
                                                        {/* Comment Meta */}
                                                        <div className="comment-author">
                                                            <img src="img/blog-img/17.jpg" alt="" />
                                                        </div>
                                                        {/* Comment Content */}
                                                        <div className="comment-content">
                                                            <span className="comment-date text-muted">27 Aug 2018</span>
                                                            <h5>Brandon Kelley</h5>
                                                            <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                            <a href="#">Like</a>
                                                            <a className="active" href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="single_comment_area">
                                                            <div className="comment-wrapper d-flex">
                                                                {/* Comment Meta */}
                                                                <div className="comment-author">
                                                                    <img src="img/blog-img/18.jpg" alt="" />
                                                                </div>
                                                                {/* Comment Content */}
                                                                <div className="comment-content">
                                                                    <span className="comment-date text-muted">27 Aug 2018</span>
                                                                    <h5>Brandon Kelley</h5>
                                                                    <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                                    <a href="#">Like</a>
                                                                    <a className="active" href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="single_comment_area">
                                                    <div className="comment-wrapper d-flex">
                                                        {/* Comment Meta */}
                                                        <div className="comment-author">
                                                            <img src="img/blog-img/19.jpg" alt="" />
                                                        </div>
                                                        {/* Comment Content */}
                                                        <div className="comment-content">
                                                            <span className="comment-date text-muted">27 Aug 2018</span>
                                                            <h5>Brandon Kelley</h5>
                                                            <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                                                            <a href="#">Like</a>
                                                            <a className="active" href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>

                                        {/* Leave A Comment */}
                                        <div className="leave-comment-area section_padding_50 clearfix">
                                            <div className="comment-form">
                                                <h4 className="mb-30">Leave A Comment</h4>

                                                {/* Comment Form */}
                                                <form action="#" method="post">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="contact-name" placeholder="Name"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="contact-email" placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="contact-website" placeholder="Website"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn contact-btn">Post Comment</button>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <BlogSidebar />
                        </div>
                    </div>
                </single>
            </>
        );
    }
}

export default Single