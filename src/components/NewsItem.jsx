/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React from 'react';

function NewsItem({ title, description, imgUrl, newsUrl }) {

    return (
        <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export default class newsItem extends Component {


//     render() {
//         return (
//             <div className="my-3">
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src={imgUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <a href="/" className="btn btn-sm btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>)
//     }
// }
