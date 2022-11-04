import { useEffect, useState} from "react"
import * as api from "../api"
import Comment from "./Comment"


export default function CommentSection({article_id, username}) {
    let [comments, setComments] = useState()
    let [commentInput, setCommentInput] = useState("")
    let [commentError, setCommentError] = useState(false)

    useEffect(() => {
        api.getCommentsByArticle(article_id)
        .then(({data}) => {
            setComments(data.comments)
        })
        .catch(err => console.log("error", err))
    }, [article_id, comments]) 

    function submitComment(event) {
        event.preventDefault()
        api.postCommentByArticle(article_id, username, commentInput)
        .then(setCommentError(false))
        .catch(() => {setCommentError(true)})
    }

    return <>
    <form onSubmit={submitComment}>
        <label>New Comment: </label>
        <input value={commentInput} onChange={(event) => {setCommentInput(event.target.value)}}></input>
        <button type="submit">Submit</button>
    </form>
    <p>{commentError === true? "Sorry, there is an error" : null}</p>
    <p>Comments: {comments ? comments.length : "loading"}</p>
    <div className="flex">
        {comments ? comments.map(comment => <Comment key={comment.comment_id} comment={comment} username={username}/>) : null}
    </div>
    </>
}