import { useEffect, useState} from "react"
import axios from "axios"
import ArticleInfo from "./ArticleInfo"
import { Link } from "react-router-dom"

export default function Home({topic}) {
    let [articles, setArticles] = useState()
    let [loadingArticles, setLoadingArticles] = useState(true)
    let [topics, setTopics] = useState()
    let [loadingTopics, setLoadingTopics] = useState(true)



    useEffect(() => {
        setLoadingArticles(true)
        let url = "https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles?"
        if (topic) url+= `topic=${topic}`
        axios.get(url)
        .then(({data}) => {
            setArticles(data.articles)
            setLoadingArticles(false)
        })
        .catch(err => console.log("error", err))
    }, [topic]) 

    useEffect(() => {
        setLoadingTopics(true)
        axios.get("https://nc-news-backend-shahbazrafi.herokuapp.com/api/topics")
        .then(({data}) => {
            setTopics(data.topics)
            setLoadingTopics(false)
        })
        .catch(err => console.log("error", err))
    }, [])

    if (loadingArticles || loadingTopics) return <p>loading</p>

    return <>{topics.map(item => <Link to={`/${item.slug}`}><p key={item.slug}>{item.slug}</p></Link>)}
    <h2>{topic}</h2>
    {articles.map(article => <ArticleInfo key={article.article_id} article={article}/>)}

    </>
}