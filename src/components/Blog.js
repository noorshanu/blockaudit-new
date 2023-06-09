import React,{useState,useEffect} from 'react'
import './Blog.css'
import styles from "scss/layout/Business.module.scss";
import useMediaQuery from "hooks/useMediaQuery";
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
  let toText = (node) => {
    let tag = document?.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  const finalData = mediumData.slice(0, 3);
  const isBellow500px = useMediaQuery("(max-width : 31.25em)");
  return (
    <>
   
   <div className="container-wrapper">

    
<div className={styles.wrapper} >
<header className={isBellow500px ? "mb-20px " : "mb-120px mt-120px r"}>
<div className="container-wrapper pad ">
  <h1 className="text-center fs-64px white weight-6 lh-1 font-space">
  BLOGS
  </h1>
</div>
</header>
</div></div>
<div id="blog" className="container-wrapper mt-3">
      {isLoading && <p>Fetching data from Medium!</p>}

      <div className='news-box'>
        {finalData.map(article => (
          <div md="4" className="mb-3 news-card" key={article.guid}>
            <div>
              <div className='img-b' >
                <img top width="100%" src={article.thumbnail} alt="img" />
                </div>
                <div>
                  <div className='news-text'>
                    
                    <a href={article.link}>
                      <h2> {toText(article?.title).substring(0, 30).concat("...")}</h2>
                      </a>
                  </div>
                  {/* <p className='news-text-p'>{toText(article?.content).substring(0, 70).concat("...")}{" "}</p>
                  */}
               
              </div>
            </div>
          </div>
        ))}
<div className='text-center'> <a href='https://blockauditreport.medium.com/'><img src='images/moreicon.png' alt='' className='more-img'/></a></div>
        
      </div>
    </div>
    </>
  )
}

export default Blog