import ArticleInfo from "./ArticleInfo"
import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import * as api from "../api"
import CommentSection from "./CommentSection"

export default function Article({username}) {
    const {article_id} = useParams()
    let [article, setArticle] = useState()
    let [loadingArticle, setLoadingArticle] = useState(true)
    let [loadingArticleError, setLoadingArticleError] = useState(false)
    
    useEffect(() => {
        setLoadingArticle(true)
        api.getArticle(article_id)
        .then(({data}) => {
            setArticle(data.articles)
            setLoadingArticle(false)
        })
        .catch(err => {
            setLoadingArticle(false)
            setLoadingArticleError(true)
        })
    }, [article_id]) 

    if (loadingArticle) return <p>loading</p>
    if (loadingArticleError) return <p>error loading article</p>

    return <>
        <p>Article {article_id}</p>
    <div className="flex">
        <ArticleInfo key={article.article_id} article={article}/>
        <div className="ArticleBody">{article.body}</div>
    </div>
    <CommentSection article_id={article_id} username={username}/>
    </>
}