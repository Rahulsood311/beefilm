import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const dark = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setpage, numofpages = 10 }) => {
  const HandlePageChange = (page) => {
    setpage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={dark}>
        <Pagination
          count={numofpages}
          onChange={(e) => HandlePageChange(e.target.textContent)}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
