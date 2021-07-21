import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Genre from "../../components/Genre";
import CustomPagination from "../../components/pagination/CustomPagination";
import Singlecontent from "../../components/singlecontent/Singlecontent";
import useGenre from "../../hooks/useGenre";


const Movies = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [num, setnum] = useState();
  const [selectedgenre, setselectedgenre] = useState([]);
  const [genres, setgenre] = useState([]);
  const genreforURL = useGenre(selectedgenre);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=6481c13777392160b3b608bacbc25d71&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    // console.log(data);
    setcontent(data.results);
    setnum(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL,page]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genre
        type="movie"
        selectedgenre={selectedgenre}
        genres={genres}
        setgenre={setgenre}
        setselectedgenre={setselectedgenre}
        setpage={setpage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {num > 1 && <CustomPagination setpage={setpage} numofpages={num} />}
    </div>
  );
};

export default Movies;
