import React, { Component } from 'react';

// Components
import CategoriesArea from "../../../components/Areas/CategoriesArea"
import BreadCrumb from "../../../components/BreadCrumb"

class MemberHome extends Component {
    render() {
      return (
        <>
            <BreadCrumb name="Member Name" />
            <CategoriesArea />
        </>
      )
    };
}

export default MemberHome

        
// <section className="archive-area section_padding_80">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-12 col-md-6 col-lg-4">
            //                 <Post 
            //                     name="Post 1"
            //                 />
            //             </div>
                        
            //             <div className="col-12 col-md-6 col-lg-4">
            //                 <Post 
            //                     name="Post 2"
            //                 />
            //             </div>

            //             <div className="col-12 col-md-6 col-lg-4">
            //                 <Post 
            //                     name="Post 3"
            //                 />
            //             </div>
                    
            //             {/* Pagination */}
            //             <div className="col-12">
            //                 <div className="pagination-area d-sm-flex mt-15">
            //                     <nav aria-label="#">
            //                         <ul className="pagination">
            //                             <li className="page-item active">
            //                                 <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
            //                             </li>
            //                             <li className="page-item"><a className="page-link" href="#">2</a></li>
            //                             <li className="page-item"><a className="page-link" href="#">3</a></li>
            //                             <li className="page-item">
            //                                 <a className="page-link" href="#">Next <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            //                             </li>
            //                         </ul>
            //                     </nav>
            //                     <div className="page-status">
            //                         <p>Page 1 of 60 results</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section> 