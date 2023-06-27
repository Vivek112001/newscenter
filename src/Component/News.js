import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import { PropTypes } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=097ef60e4fd941e5aada317b253b476f&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    setLoading(true);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  }
  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=097ef60e4fd941e5aada317b253b476f&page=${page + 1}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  }
  useEffect(() => {
    document.title = `${props.category}-NewsCenter`
    updateNews()
  }, [])


  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();

  // };
  // handlePreviousClick = async () => {
  //   this.setState({page:this.state.page-1})
  //   this.updateNews();
  // };


  // let {pagesize}=this.props
  return (
    <>

      <h2 className=" text-center " style={{ margin: '35px 0px', marginTop: '90px' }}>Top {props.category}Headlines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <>
                  <div className=" col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      desc={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        !element.urlToImage
                          ? "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_742495_16794505269513161.jpg"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : 'Unknown'}
                      time={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>


      </InfiniteScroll>


      {/* <div className="container d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pagesize)
              }
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
  pagesize: 6,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}