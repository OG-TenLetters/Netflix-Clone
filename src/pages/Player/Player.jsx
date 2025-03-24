import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJiNjlkYWJmMmYxNTQ4ZGE3MWFkZjQ5NGRlMjVhMiIsIm5iZiI6MTc0MjU4NTA2NC45MDYsInN1YiI6IjY3ZGRiY2U4MDUxY2JhOTA2NmY1NjRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyAsQcXmbm9BoxH4RYdKZzfKfDbbOcAY_aYJe8dhDiM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((Response) => setApiData(Response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to={`/`}>
        <img src={back_arrow_icon} alt="" />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player__info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
