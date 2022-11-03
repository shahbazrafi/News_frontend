import ArticleInfo from "./ArticleInfo"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState} from "react"
import Comment from "./Comment"

export default function Article({username}) {
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


    let [commentInput, setCommentInput] = useState("")
    let [commentError, setCommentError] = useState(false)

    if (loadingArticle) return <p>loading</p>

    function submitComment(event) {
        event.preventDefault()
        axios.post(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article_id}/comments`, {username: username, body: commentInput})
        .then()
        .catch(() => {setCommentError(true)})
    }



    return <>
        <p>Article {article_id}</p>
    <div className="flex">
        <ArticleInfo key={article.article_id} article={article}/>
        <div className="ArticleBody">{article.body}</div>
    </div>
        <p>Comments: {comments.length}</p>
        <form onSubmit={submitComment}>
            <label>New Comment: </label>
            <input value={commentInput} onChange={(event) => {setCommentInput(event.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>
        <p>{commentError === true? "There was an error" : null}</p>
    <div className="flex">
        {comments.map(comment => <Comment key={comment.comment_id} comment={comment}/>)}
    </div>
    </>
}