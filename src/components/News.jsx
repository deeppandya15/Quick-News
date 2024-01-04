/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import React from 'react'
import NewsItem from './newsItem'
import { useState, useEffect } from "react"

function News() {


    const fetchData = async () => {

        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=22b58b9cf7ac4cb3b31d126b95cbfd44";
        let response = await fetch(url);
        let data = await response.json();

        // Update state with fetched data
        setArticles(data.articles);
    }

    const [articles, setArticles] = useState([])
    useEffect(() => {
        // Call the fetchData function when the component renders
        fetchData();
    }, []);
    return (
        <>
            <div className='container my-3'>
                <h2>QuickNews-Top Headlines</h2>
                <div className="row">
                    {articles.map((elem) => {
                        return <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title ? elem.title.slice(0, 45) : ""} description={elem.description ? elem.description.slice(0, 90) : ""} imgUrl={elem.urlToImage ? elem.urlToImage : "https://img.etimg.com/thumb/msid-106520531,width-1070,height-580,overlay-etmarkets/photo.jpg"} newsUrl={elem.url} />
                        </div>
                    })}

                </div>

            </div>
        </>
    )
}

export default News