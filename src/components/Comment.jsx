import { useState} from "react"
import axios from "axios"


export default function Comment({comment}) {
    let {comment_id, body, author, votes, created_at} = comment
    let [addVote, setAddVote] = useState(0)

    function voteUp () {
        setAddVote((x) => x+1)
        // axios.patch(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article_id}`, { inc_votes : 1})
        // .then()
        // .catch(() => setAddVote((x) => x-1))
    }

    function voteDown () {
        setAddVote((x) => x-1)
        // axios.patch(`https://nc-news-backend-shahbazrafi.herokuapp.com/api/articles/${article_id}`, { inc_votes : -1})
        // .then()
        // .catch(() => setAddVote((x) => x+1))
    }

    return <div className="Comments">
        <p>"{body}"</p>
        <p>Author: {author}</p>
        <p>{created_at.slice(11,16)} {created_at.slice(0,10)}</p>
        <p>Votes: {votes + addVote}</p>
        <button disabled={addVote===1} onClick={() => voteUp()}>Vote Up</button>
        <button disabled={addVote===-1} onClick={() => voteDown()}>Vote Down</button>
    </div>
}