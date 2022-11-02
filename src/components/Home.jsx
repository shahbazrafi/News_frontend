import { useEffect, useState} from "react"
import axios from "axios"
import ArticleInfo from "./ArticleInfo"

export default function Home() {
    let [articles, setArticles] = useState()
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get("https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles")
        .then(({data}) => {
            setArticles(data.articles)
            setLoading(false)
        })
        .catch(err => console.log("error", err))
    }, []) 

    if (loading) return <p>loading</p>

    return <>{articles.map(article => <ArticleInfo key={article.article_id} article={article}/>)}

    </>
}