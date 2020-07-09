import React, { Component } from 'react'
import BlogSidebar from "../../../components/BlogSidebar"

import BreadCrumb from "../../../components/BreadCrumb"
class MemberDetail extends Component {
    render() {
        return (
            <>
                <BreadCrumb name="Member Name" />
                <section className="blog_area section_padding_80">
                    <div className="container">
                        <div className="row justify-content-center">
                             <div className="col-12 col-lg-8">
                             <div className="single-post">
                                {/* Post Thumb */}
                                <div className="post-thumb">
                                    <img src="../../../img/blog-img/10.jpg" alt="" />
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

                                    <img className="br-30 mb-30" src="../../../img/blog-img/11.jpg" alt="" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <img className="br-30 mb-30" src="../../../img/blog-img/12.jpg" alt="" />
                                    <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <img className="br-30 mb-30" src="../../../img/blog-img/13.jpg" alt="" />
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

                                    <img className="br-30 mb-15" src="../../../img/blog-img/14.jpg" alt="" />
                                </div>
                            </div>
                             </div>
                             <BlogSidebar />
                       </div>
                    </div>
                </section>
            </>
        )
    }
}

export default MemberDetail
