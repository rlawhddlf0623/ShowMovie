import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Movie({id,title,summary,large_cover_image,genres}){
    return(
    <div>     
        <h2> 
            <Link to={`/movie/${id}`} >{title} </Link>
        </h2>  
        <p>{summary}</p>
        <img src={large_cover_image} alt={title}/>
        
        <p>
        <ul>
            {genres.map(genre=>
            <li>{genre}</li>  
            )}
        </ul>
        </p>
    </div>
    )
}
class Movie2{
static PropTypes={
    id:PropTypes.number.isRequired,
    large_cover_image : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    title :PropTypes.string.isRequired,
    genres :PropTypes.arrayOf(PropTypes.string).isRequired

}
}
export default Movie;


