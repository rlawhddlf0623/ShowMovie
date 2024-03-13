import { useEffect, useState } from "react";
import Movie from "../component/movie";
import home from "../css/Home.css"
import { Link } from "react-router-dom/cjs/react-router-dom";



function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] =useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputValueMovie, setInputValueMovie] = useState('');
    // 입력값을 저장
    const handleInputChange = (event) => {
      const value = event.target.value;
      // 숫자가 아닌 경우 무시
      if (!isNaN(value)) {
        // 0 이상 10 이하인지 확인
        if (value >= 0 && value <= 10) {
          setInputValue(value);
         
          handleSubmit()
        }
      }
    };

    // submit되었을때 
    const handleSubmit = async(event) => {
      // 여기가 문제 
      // event.preventDefault(); 
      const json = await( await fetch(
        // 평점9이상 최신순
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${inputValue}&sort_by=year`)
        ).json();
      setInputValueMovie(json.data.movies);
      console.log(json.data.movies)
      setLoading(false);   
      setInputValue('');
    };

    const getMovies = async()=>{
     const json = await( await fetch(
      // 평점9이상 최신순
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      ).json();
      
      setMovies(json.data.movies)
      
      setLoading(false);     
    }
    useEffect(()=>{
      getMovies()
    },[])
return ( 
  <div>  
  {loading? <h1>loading...</h1>:
<div>
  <nav className="Home_nav">
    <span>평점 검색 </span>
    <form onSubmit={handleSubmit}>
      <input className="Home_input" type="number" 
      value={inputValue}
      onChange={handleInputChange} ></input>
      <input type="submit" value="Submit" />
    </form>
    
    <Link to={`/talk`} >
    <h2>conversational topic</h2>
    </Link>
  </nav>   
    <div className='Home_container'>
        <div className='Home_movies'>     
              {movies.map((movie) => 
              <Movie
              key={movie.id}
              id={movie.id}
              rating ={movie.rating}
              url={movie.url} 
              title={movie.title} 
              summary={movie.summary} 
              large_cover_image={movie.large_cover_image} 
              genres={movie.genres}
              year = {movie.year}/>
              )}
        </div>
    </div>
</div>


  }
  </div>
);
}
export default Home;