import { useEffect, useState } from "react"
import axios from "axios";
const NewsFeed = () => {
    const [article, setArticles] = useState(null)
    useEffect(() => {

        var options = {
          method: 'GET',
          url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
          headers: {
            'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
        };
        
        axios.request(options).then((response) =>{
            console.log(response.data)
            setArticles(response.data)
        }).catch((error)=>{
            console.error(error)
        });
    }, []);
    const first7articles = article?.slice(5, 12) 
    console.log(article);
    return (
        <div className="news-feed">

            <h2>NewsFeed</h2>
            {first7articles?.map((article, _index) => (<div key={_index}>
                <a href={article.url}>
                <p>{article.title}</p>
                </a>
            </div>))}
        </div>
    )

}

export default NewsFeed