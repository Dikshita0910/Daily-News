import React from 'react'

const NewsItem = (props)=> {
  
  let {title, description , imageurl , Newsurl , author, date , source} = props;
    return (
        <div className='my-3'>
        <div className="card">  <div style={{
          display:'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right:'0'
        }}>
          <span className='badge rounded-pill bg-danger'> {source}</span> 
        </div>
            <img src={!imageurl?"https://static.toiimg.com/thumb/msid-100306254,width-1070,height-580,imgsize-9590,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg": imageurl}
             className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {!author?"unknown" : author } on {new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={Newsurl} className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
            </div>
      
    )
  
}

export default NewsItem
