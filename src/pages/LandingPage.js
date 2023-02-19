import React from "react";
import SearchBar from "../components/search_bar/SearchBar";
import MovieCard from "../components/movie_card/MovieCard";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

function LandingPage() {
  const classes = useStyle();
  const searchResult = useSelector(state => state.search.searchResult)

  const renderCard = () => {

    return searchResult?.map((item) => (
      <MovieCard key={item.id} data={item} />
    ));
  }

  return (
    <div>
      <SearchBar />
      {
        Array.isArray(searchResult) && !searchResult.length ? <div>No Result found</div>: <div className={classes.container}>{renderCard()}</div>
      }
    </div>
  );
}

export default LandingPage;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "2em",
  },
  noSearch: {
    fontSize: "1.6em",
    display: "flex",
    justifyContent: "center",
    color: "#a7a7a7",
  },
}));
