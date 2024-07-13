
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
// import NewsItem from './components/NewsItem';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =() => {
  const pageSize= 15 ; 
  // apikey=process.env.REACT_APP_NEWS_API
 const [progress , setProgress] =useState(0)



    return (
      <div>
        <Router>    
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      
     <Routes> 
     <Route exact path ="/" element={<News setProgress={setProgress}key="general" pageSize={pageSize} country="In" category="general" />}></Route>
     <Route exact path ="/business" element={<News setProgress={setProgress}key="business" pageSize={pageSize} country="In" category="business"/>}></Route>
     <Route exact path ="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="In" category="entertainment" />}></Route>
     <Route exact path ="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="In" category="general" />}></Route>
     <Route exact path ="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="In" category="health" />}></Route>
     <Route exact path ="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="In" category="science" />}></Route>
     <Route exact path ="/sport" element={<News setProgress={setProgress} key="sport" pageSize={pageSize} country="In" category="sport" />}></Route>
     <Route exact path ="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="In" category="technology"/>}></Route>
     
     </Routes>
      </Router>
      </div>

    )
  
}
export default App;