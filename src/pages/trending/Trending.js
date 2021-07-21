import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CustomPagination from "../../components/pagination/CustomPagination";
import Singlecontent from "../../components/singlecontent/Singlecontent";
import "./trending.css";

const Trending = () => {
  const [page,setpage] =useState(1);
  const [content, setcontent] = useState([]);

  const fetchtrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=6481c13777392160b3b608bacbc25d71&page=${page}`);
    // console.log(data);
    setcontent(data.results);
  };
  useEffect(() => {
    fetchtrending( 0);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setpage = {setpage} />
    </div>
  );
};

export default Trending;
