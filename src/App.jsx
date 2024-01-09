import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


function App() {

  const [navLoading, setNavLoading] = useState(0)
  // const newsapi = import.meta.env.VITE_NEWS_API;      //accessing Api from .env file 
  const newsapi = '22b58b9cf7ac4cb3b31d126b95cbfd44'
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={navLoading}   //it changes its value as we upadte it using state.
          onLoaderFinished={() => setNavLoading(0)}   //it sets loading bar to 0 after loading finished.
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"general"} pagesize={5} country={"in"} category={"general"} />}></Route>
          <Route exact path='/business' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"business"} pagesize={5} country={"in"} category={"business"} />}></Route>
          <Route exact path='/entertainment' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"entertainment"} pagesize={5} country={"in"} category={"entertainment"} />}></Route>
          <Route exact path='/health' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"health"} pagesize={5} country={"in"} category={"health"} />}></Route>
          <Route exact path='/science' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"science"} pagesize={5} country={"in"} category={"science"} />}></Route>
          <Route exact path='/sports' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"sports"} pagesize={5} country={"in"} category={"sports"} />}></Route>
          <Route exact path='/technology' element={<News newsApi={newsapi} loadingBar={setNavLoading} key={"technology"} pagesize={5} country={"in"} category={"technology"} />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
