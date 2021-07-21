import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import Contantmodel from "../modal/Contentmodal";
import "./singlecontent.css";

const Singlecontent = ({
  id,
  poster,
  date,
  title,
  media_type,
  vote_average,
}) => {
  return (
    <Contantmodel  media_type = {media_type} id = {id}>
      <Badge badgeContent = {vote_average} color={vote_average>6? 'primary':'secondary'}/>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        {media_type === "tv" ? "TV Series " : " Movie"}
      <span className="subtitle">{date}</span>
      </span>
    </Contantmodel>
  );
};

export default Singlecontent;
