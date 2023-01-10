import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovieDetail(json.data.movie);
  }, [id]);

  console.log(movieDetail);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return (
    <div>
      {loading ? (
        <h1>Loading... {movieDetail.title}</h1>
      ) : (
        <div>
          <img src={movieDetail.medium_cover_image} alt={movieDetail.id} />
          <h2>{movieDetail.title}</h2>
          <p>{movieDetail.description_full}</p>
          <div>
            <h2>Genres</h2>
            <ul>
              {movieDetail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
