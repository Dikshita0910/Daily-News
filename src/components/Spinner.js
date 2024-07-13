import React from 'react'
import loading from './loading.gif'

const Spinner= ()=> {
  
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading"/> 
      </div>
    )
  
}

export default Spinner
// if((this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

    // }
    // else{
    // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23bee9a099da438cb0200ef5e9caceed&page=${this.state.page + 1}&pageSize=${props.pageSize} `;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles
    // })