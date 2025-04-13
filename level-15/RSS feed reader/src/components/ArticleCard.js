import React from 'react';


const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <p><strong>Source:</strong> {article.feedTitle}</p>
      <p>{article.description?.slice(0, 150)}...</p>
      <a href={article} target="_blank" rel="noreferrer">Read More</a>
      <p className="date">{new Date(article.pubDate).toLocaleString()}</p>
    </div>
  );
};

export default ArticleCard;
