import {
  Button,
  Tab,
  Tabs,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useEffect } from "react";
import Singlecontent from "../../components/singlecontent/Singlecontent";
import CustomPagination from "../../components/pagination/CustomPagination";

const Search = () => {
  const [type, settype] = useState(0);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState();
  const [content, setcontent] = useState();
  const [num, setnum] = useState();

  const dark = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchsearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_BEEFILM_KEY
      }&language=en-US&query=${search}&page=${page}&include_adult=false`
    );
    setcontent(data.results);
    setnum(data.total_pages);
  };

  useEffect(() => {
    fetchsearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <ThemeProvider theme={dark}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setsearch(e.target.value)}
          />

          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchsearch}
          >
            {" "}
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary "
          textColor="primary"
          onChange={(event, newValue) => {
            settype(newValue);
            setpage(1);
          }}
          style={{ paddingBottom: 5 }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search Tv Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Singlecontent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "Movie"}
              vote_average={c.vote_average}
            />
          ))}
        {search &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {num > 1 && <CustomPagination setpage={setpage} numofpages={num} />}
    </div>
  );
};

export default Search;
