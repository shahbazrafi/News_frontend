import { useEffect, useState} from "react"
import axios from "axios"
import ArticleInfo from "./ArticleInfo"
import { Link, useParams} from "react-router-dom"

export default function Home() {
    const {topic} = useParams()
    let [articles, setArticles] = useState()
    let [loadingArticles, setLoadingArticles] = useState(true)
    let [topics, setTopics] = useState()
    let [sort_by, setSort_by] = useState("created_at")
    let [order, setOrder] = useState("ASC")
    let [loadingTopics, setLoadingTopics] = useState(true)



    useEffect(() => {
        setLoadingArticles(true)
        let url = "https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles?"
        if (sort_by) url+= `sort_by=${sort_by}`
        if (order) url+= `&order=${order}`
        if (topic) url+= `&topic=${topic}`
        axios.get(url)
        .then(({data}) => {
            setArticles(data.articles)
            setLoadingArticles(false)
        })
        .catch(err => console.log("error", err))
    }, [topic, sort_by, order]) 

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

    return <>
    {topics.map(item => <Link to={`/topics/${item.slug}`}><p key={item.slug}>{item.slug}</p></Link>)}
    <h1>{topic ? topic : "All"}</h1>
    <form>
        <label>Sort by: </label>
        <select onChange={(event) => {setSort_by(event.target.value)}}>
            <option value="">-</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
        </select>
        <label> Order by: </label>
        <select onChange={(event) => {setOrder(event.target.value)}}>
            <option value="">-</option>
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
        </select>
    </form>
    <div className="flex">
    {articles.map(article => <ArticleInfo key={article.article_id} article={article}/>)}
    </div>
    </>
}