import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
import axios from "axios"

export default function ArticleInfo({article}) {
    let [addVote, setAddVote] = useState(0)

    function voteUp () {
        setAddVote(1)
        axios.patch(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article.article_id}`, { inc_votes : 1})
        .then()
        .catch(() => setAddVote(0))
    }

    return <div className="ArticleInfo">
        <Link to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.created_at.slice(0,10)}</p>
        <p>Comments: {article.comment_count}</p>
        </Link>
        <p>Votes: {article.votes + addVote}</p>
        <button disabled={addVote===1} onClick={() => voteUp()}>Vote Up</button>
        
    </div>
}