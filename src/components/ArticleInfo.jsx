import { Link } from "react-router-dom"
import { useState} from "react"
import * as api from "../api"

export default function ArticleInfo({article}) {
    let [addVote, setAddVote] = useState(0)
    let {article_id, title, topic, author, created_at, comment_count, votes} = article

    function voteUp () {
        setAddVote((currentVotes) => currentVotes+1)
        api.patchVotesByArticle(article_id, 1)
        .then()
        .catch(() => setAddVote((currentVotes) => currentVotes-1))
    }

    function voteDown () {
        setAddVote((currentVotes) => currentVotes-1)
        api.patchVotesByArticle(article_id, -1)
        .then()
        .catch(() => setAddVote((currentVotes) => currentVotes+1))
    }

    return <div className="ArticleInfo">
        <Link to={`/article/${article_id}`}>
        <h2>{title}</h2>
        <p>{topic}</p>
        <p>Author: {author}</p>
        <p>{created_at.slice(11,16)} {created_at.slice(0,10)}</p>
        <p>Comments: {comment_count}</p>
        </Link>
        <p>Votes: {votes + addVote}</p>
        <button disabled={addVote===1} onClick={() => voteUp()}>Vote Up</button>
        <button disabled={addVote===-1} onClick={() => voteDown()}>Vote Down</button>
    </div>
}