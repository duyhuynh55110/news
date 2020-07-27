import React, { Component } from 'react';

import Item from "../Categories/Item"

class CategoriesArea extends Component {
    render() {
        return (
            <section className="categories_area clearfix">
                    <div className="container">
                        <div className="row">
                            <Item 
                                    categoryType="catagory-title2"
                                    name="Rose" 
                                    path="/members/detail/123"
                                    img="https://i.pinimg.com/564x/3b/db/81/3bdb816f0da89c562dd6c2266b5212ce.jpg"
                            />
                           <Item 
                                    categoryType="catagory-title2"
                                    name="Lisa" 
                                    path="/members/detail/123"
                                    img="https://vfan-phinf.pstatic.net/20200425_131/1587748823067F3AJp_PNG/original.png?type=e1280"
                            />
                           <Item 
                                    categoryType="catagory-title2"
                                    name="Jisoo" 
                                    path="/members/detail/123"
                                    img="https://i1-ione.vnecdn.net/2018/12/27/Dptq26kXoAEeH4G-1545880669-3374-1545880723.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=ASFpZc1z6DxoCcZo0OUGcQ"
                            />
                            <Item 
                                    categoryType="catagory-title2"
                                    name="Jennie" 
                                    path="/members/detail/123"
                                    img="https://dbkpop.com/wp-content/uploads/2016/11/blackpink_jennie_6.jpg"
                            />
                        </div>
                    </div>
                </section>
        )
    }
}

export default CategoriesArea