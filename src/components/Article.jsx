import ArticleInfo from "./ArticleInfo"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState} from "react"
import Comment from "./Comment"

export default function Article() {
    const {article_id} = useParams()


    let [article, setArticle] = useState()
    let [loadingArticle, setLoadingArticle] = useState(true)
    let [comments, setComments] = useState()

    useEffect(() => {
        setLoadingArticle(true)
        axios.get(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article_id}`)
        .then(({data}) => {
            setArticle(data.articles)
            setLoadingArticle(false)
        })
        .catch(err => console.log("error", err))
    }, [article_id]) 

    useEffect(() => {
        axios.get(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article_id}/comments`)
        .then(({data}) => {
            setComments(data.comments)
        })
        .catch(err => console.log("error", err))
    }, [article_id, comments]) 

    if (loadingArticle) return <p>loading</p>

    return <>
        <p>Article {article_id}</p>
    <div className="flex">
        <ArticleInfo key={article.article_id} article={article}/>
        <div className="ArticleBody">{article.body}</div>
    </div>
        <p>Comments: {comments ? comments.length : null}</p>
    <div className="flex">
        {comments ? comments.map(comment => <Comment key={comment.comment_id} comment={comment}/>) : null}
    </div>
    </>
}