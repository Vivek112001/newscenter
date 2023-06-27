import React from 'react';
export default function NewsItem(props){
                 return (
                <>
                  <div className="card my-2 mx-2" >
                       <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body"> <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>
                      {props.source.name}
                    </span>
                      <h5 className="card-title">{props.title}...</h5>
                         <p className="card-text">{props.desc}...</p>
                         <p className="card-text"><small className="text-body-secondary">By {props.author} at {new Date(props.time).toGMTString()}</small></p>
                    
                      <a
                        rel="noreferrer"
                           href={props.newsUrl}
                        target="_blank"
                        className="btn btn-dark btn-sm "
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </>
              );
    
}
// left: 100 % !important