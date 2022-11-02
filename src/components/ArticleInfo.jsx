export default function ArticleInfo({article}) {


    return <div className="width50">
        <h2>{article.title}</h2>
        <p>{article.category}</p>
        <p>{article.category}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>{article.votes}</p>
        <p>{article.comment_count}</p>
    </div>
}