import { Link } from "react-router-dom"


export default function ArticleInfo({article}) {


    return <div className="ArticleInfo">
        <Link to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.created_at.slice(0,10)}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        </Link>
    </div>
}