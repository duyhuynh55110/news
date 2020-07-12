import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel2'

import Post from "../../../components/Posts/Single.js"
import ItemPost from "../../../components/Posts/Item.js"
import BlogSideBar from "../../../components/BlogSidebar"
import { connect } from 'react-redux'

// Option owl carousel
const options = {
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 10,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        450: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    }
};

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            postsSlider: [],
        }
    }

    render() {
        return (
            <>
                <OwlCarousel options={options} className="welcome-post-sliders owl-carousel">
                    { this.renderSliders() }
                </OwlCarousel>

                <section className="categories_area clearfix" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                    <img src="img/catagory-img/1.jpg" alt="" />
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Food</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                    <img src="img/catagory-img/2.jpg" alt="" />
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Cooking</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                    <img src="img/catagory-img/3.jpg" alt="" />
                                    <div className="catagory-title">
                                        <a href="#">
                                            <h5>Life Style</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="blog_area section_padding_0_80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="row">
                                    {this.renderPosts()}

                                    {/* List Posts */}
                                    <div className="col-12">
                                        <ItemPost />
                                        <ItemPost />
                                        <ItemPost />
                                        <ItemPost />
                                    </div>
                                </div>
                            </div>
                       
                             <BlogSideBar />
                       </div>
                    </div>
                </section>
            </>
        );
    }

    /**
     * Render sliders
     */
    renderSliders = () => {
        const sliders = this.props.postsSlider.map(post => {
            return (
                 <div className="welcome-single-slide" key={"post-slider--" + post.id}>
                    <img src={post.image} alt="" />
                    <div className="project_title">
                        <div className="post-date-commnents d-flex">
                            <a href="#">May 19, 2017</a>
                            <a href="#">5 Comment</a>
                        </div>
                        <a href="#">
                            <h5> {post.name} </h5>
                        </a>
                    </div>
                </div>
            );
        });

        return sliders;
    }

    /**
     * Render posts
     */
    renderPosts = () => {
        const posts = this.props.posts.map((post, i) => {
            return <div className={(i > 0)?"col-12 col-md-6":"col-12"}>
                        <Post 
                            name={post.name}
                            image={post.image}
                            author="John Doe"
                            created_at={post.created_at}
                            key={"post--" + post.id}
                        />
                    </div>
        });

        return posts;
    }
}

/**
 * Get data from redux store to props Index components
 * 
 * @param {*} state 
 */
var mapStateToProp = (state) => {
    return {
        posts: state.posts,
        postsSlider: state.postsSlider,
    }
}

export default connect(mapStateToProp)(Index)