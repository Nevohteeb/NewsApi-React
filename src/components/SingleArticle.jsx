import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

const SingleArticle = () => {
    // bring in the selected article
    const { selectedArticle } = useContext(ArticleContext)
    //create a variable for the useNavigate
    const navigate = useNavigate()

  return (
    <div>
        <button onClick={() => navigate('/')}>Go Back</button>
        <h1>{selectedArticle.title}</h1>
        <p>{selectedArticle.author}</p>
        <p>{selectedArticle.source.name}</p>
        <img src={selectedArticle.urlToImage} alt={selectedArticle.title}/>
        <p>{selectedArticle.content}</p>
        <p>{selectedArticle.publishedAt}</p>
    </div>
  )
}

export default SingleArticle