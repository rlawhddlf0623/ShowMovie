import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import detail from "../css/Detail.css"

function Detail(){
    // 로딩 상태 저장
    const [loading,setLoading] =useState(true);
    // 영화 정보저장
    const [movie,setMovie] =useState();
    // url에 변경되는 값을 반환 
    const {id} =useParams();

    // 특정 영화데이터 받아와서 넣어주기 
    const getMovie =async()=>{
        const json =await(
            await  fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(json.data.movie)
        console.log(json.data.movie.url)
        setLoading(false);   
    }
   
    useEffect(()=>{
        getMovie();   
    },[])
    return (
        <div>  
            {loading? <h1>loading...</h1>:
            
                <div>     
                    <h1> 
                        {movie.title}
                    </h1>                   
                    <img src={movie.large_cover_image} alt={movie.title_long}/>
                    <p>
                    <ul>
                        <li>{movie.genres}</li>           
                        <li>평점 : {movie.rating}</li>  
                    </ul>
                    </p>
                </div>           
            
             }
        </div>
        )
}
export default Detail;