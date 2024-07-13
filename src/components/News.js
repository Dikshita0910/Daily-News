import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
 
   const [articles , setArticles]=useState([])
   const [loading , setLoading]=useState(true)
   const [page , setPage]=useState(1)
   const [totalResults , settotalResults]=useState(0)

   const  capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase()+ string.slice(1);
   }
 
  
  const  updateNews= async()=> {
    props.setProgress(10);
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23bee9a099da438cb0200ef5e9caceed&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(0);
    console.log(parsedData);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

 
  const handlepreviousClick = async () => {
    setPage(page-1)
    updateNews();
  };

  const handleNextClick = async () => {
    // this.setState({ page: this.state.page + 1 });
    setPage(page+1)
    updateNews();
  };

  useEffect(() => {
       document.title = `${capitalizeFirstletter(props.category)}- DailyNews`;
      updateNews();
  }, [])

  const fetchMoreData = async () => { 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23bee9a099da438cb0200ef5e9caceed&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults( parsedData.totalResults)
   
  }; 
   return (
    <>
        <h2 className="text-center my-3" >
          DailyNews - Top {capitalizeFirstletter(props.category)} Headline
        </h2>
        {loading && <Spinner/>}
       
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className="row">
       
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  source={element.source.name}
                  author={element.author}
                  date={element.publishedAt}
                  title={element.title ? element.title.slice(0.3) : ""}
                  description={
                    element.description ? element.description.slice(0, 50) : ""
                  }
                  imageurl={element.urlToImage}
                  Newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        </div>

        </InfiniteScroll>
      
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlepreviousClick}
          >
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
    );
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
