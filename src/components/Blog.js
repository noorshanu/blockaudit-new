import React,{useState,useEffect} from 'react'
import './Blog.css'
var moment = require("moment");

function Blog() {
    const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@blockauditreport`
    )
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 4);
  return (
    <div id="blog" className="container mt-3">
      <h3 className="ui horizontal header divider mt-5">
        <p>Blog</p>
      </h3>
      {isLoading && <p>Fetching data from Medium!</p>}

      <div className='flex'>
        {finalData.map(article => (
          <div md="4" className="mb-3 news-card" key={article.guid}>
            <div>
              <div>
                <img top width="100%" src={article.thumbnail} alt="img" />
                <div>
                  <div>
                    <a href={article.link}>{article.title}</a>
                  </div>
                  <p>
                    Published:{" "}
                    {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog