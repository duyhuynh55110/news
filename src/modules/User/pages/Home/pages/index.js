import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel2'

//Components
import Category from "../../../components/Categories/Item"
import Post from "../../../components/Posts/Single"
import ItemPost from "../../../components/Posts/Item"
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
                            { this.renderCategories() }
                        </div>
                    </div>
                </section>
            
                <section className="blog_area section_padding_0_80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="row">
                                    { this.renderPosts() }                 
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
     * Render categories
     */
    renderCategories = () => {
        const categories = this.props.categories.map(category => {
            return <Category 
                        path="#"
                        name={category.name}
                        img={category.img}
                        key={"category--" + category.id}
                />
        })

        return categories;
    }

    /**
     * Render sliders
     */
    renderSliders = () => {
        const sliders = this.props.postsSlider.map(post => {
            return (
                 <div className="welcome-single-slide" key={"post-slider--" + post.id}>
                    <img src={post.img} alt="" />
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
        const posts = this.props.posts.filter((post, i) => {return i < 5}).map((post, i) => {
            return <div className={(i > 0)?"col-12 col-md-6":"col-12"}>
                        <Post 
                            name={post.name}
                            img={post.img}
                            author="John Doe"
                            created_at={post.created_at}
                            key={"post--" + post.id}
                        />
                    </div> 
        });
        const listPosts = this.props.posts.filter((post, i) => {return i > 5}).map((post, i) => {
            return <ItemPost 
                        name={post.name}
                        img={post.img}
                        author="John Doe"
                        created_at={post.created_at}
                        key={"post--" + post.id}
                />
        });

        return (
            <>
                {posts}
                <div className="col-12">
                    {listPosts}
                </div>
            </>
        );
    }
}

/**
 * Get data from redux store to props Index components
 * 
 * @param {*} state 
 */
var mapStateToProps = (state) => {
    return {
        posts: state.posts,
        postsSlider: state.postsSlider,
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(Index)