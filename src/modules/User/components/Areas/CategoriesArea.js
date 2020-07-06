import React, { Component } from 'react';

import Item from "../Categories/Item"

class CategoriesArea extends Component {
    render() {
        return (
            <section className="categories_area clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <Item 
                                    name="Irene" 
                                    path="#"
                                    image="https://image7.uhdpaper.com/wallpaper-hd/irene-red-velvet-psycho-uhdpaper.com-hd-7.697.jpg"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <Item 
                                    name="Irene" 
                                    path="#"
                                    image="https://image7.uhdpaper.com/wallpaper-hd/irene-red-velvet-psycho-uhdpaper.com-hd-7.697.jpg"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <Item 
                                    name="Irene" 
                                    path="#"
                                    image="https://image7.uhdpaper.com/wallpaper-hd/irene-red-velvet-psycho-uhdpaper.com-hd-7.697.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default CategoriesArea