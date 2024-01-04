// import React from 'react'
import NewsItem from './newsItem'

function News() {
    return (
        <>
            <div className='container my-3'>
                <h2>QuickNews-Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" imgUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/134FA/production/_132189097_burger.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default News