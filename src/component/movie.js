import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom';



function Movie({id,title,summary,large_cover_image,genres,rating,year}){
    return(
      <div className='Movie_movie'>
         <Link to={`/movie/${id}`} >
                    <img className='Movie_movie_img' src={large_cover_image} alt={title}/>
         </Link>
                    <div>
                        <Link to={`/movie/${id}`} >
                        <h2 className='Movie_movie_title'>{title} </h2>  
                        </Link>
                        <h3 className='Movie_movie_year'></h3>
                        <ul className='Movie_movie_genres'>
                            <li> {year}</li>  
                            <li>평점 : {rating}</li> 
                            {genres.map(genre=>
                            <li key={genre}>{genre}</li>
                            )}                                                 
                        </ul>
                        <p>{summary.split(' ').slice(0, 30).join(' ')}</p>  
                     </div>      
        </div>
    )
}
 class Movie2{ 
static PropTypes={
    id:PropTypes.number.isRequired,
    large_cover_image : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    title :PropTypes.string.isRequired,
    genres :PropTypes.arrayOf(PropTypes.string).isRequired,
    year :PropTypes.number.isRequired

}
}
export default Movie;


