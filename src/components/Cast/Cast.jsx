import { fetchApiCast } from "service/service"
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Cast =()=>{
   const { movieId } = useParams();
   const [actors, setActors] = useState([]);


  useEffect(() => {
    fetchApiCast(movieId)
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }
        return Promise.reject(new Error('Sorry no image'));
      })
      .then(data => setActors(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
if (!actors){
  return null
} 
return actors.map(({ character, original_name, profile_path, id }) => (
  <li key={id}>
    <img
      src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
      alt={original_name}
    />
    <p>{original_name}</p>
    <p>Character: {character}</p>
  </li>
));
}
export default Cast;