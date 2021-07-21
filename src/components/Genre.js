import { Chip } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Genre = ({
  selectedgenre,
  setselectedgenre,
  genres,
  setgenre,
  type,
  setpage,
}) => {
  const Handleadd = (genre) => {
    setselectedgenre([...selectedgenre, genre]);
    setgenre(genres.filter((g) => g.id !== genre.id));
    setpage(1);
  };
  const Handlerem = (genre) => {
    setselectedgenre(
      selectedgenre.filter((selected) => selected.id !== genre.id)
    );
    setgenre([...genres, genre]);
    setpage(1);
  };
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=6481c13777392160b3b608bacbc25d71&language=en-US`
    );
    setgenre(data.genres);
  };
//   console.log(genre);
  useEffect(() => {
    fetchGenre();
    return () => {
      setgenre({});
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedgenre &&
        selectedgenre.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            key={genre.id}
            clickable
            onDelete = { () => Handlerem(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            clickable
            onClick={() => Handleadd(genre)}
          />
        ))}
    </div>
  );
};

export default Genre;
