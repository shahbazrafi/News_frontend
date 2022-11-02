export default function ArticleInfo({article}) {


    return <div className="ArticleInfo">
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.created_at.slice(0,10)}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
    </div>
}