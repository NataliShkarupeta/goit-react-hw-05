import { useEffect, useState } from 'react';
import { fetchApiReviews } from 'service/service';
import { useParams } from 'react-router-dom';
import { Li } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchApiReviews(movieId)
      .then(respons => {
        if (respons.ok) {
          return respons.json();
        }
        return Promise.reject(new Error('Sorry no image'));
      })
      .then(data => setReviews(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

 

  return (
    <>
      {reviews.length === 0 && <p>We don`t have any reviews for this movie</p>}

      {reviews.map(({ id, author, content }) => (
        <Li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </Li>
      ))}
    </>
  );
};

export default Reviews;
