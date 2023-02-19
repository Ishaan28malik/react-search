import React, { useCallback } from "react";
import {
  withStyles,
  InputBase,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { Style } from "./Style";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../../store/actions";
import { loaderOn } from "../../store/actions/SearchAction";
import { debounce } from "lodash";

function SearchBar(props) {
  const loading = useSelector(state => state.search.loading)
  const { classes } = props;
  const dispatch = useDispatch();
  const debounceCall = useCallback(debounce((value) => searchCallAPi(value), 500),[])

  function searchCallAPi(query){
    if (query.length < 2) {
      return
    }
    let params = { "q": query };
    dispatch(loaderOn())
    dispatch(searchQuery({ params }))
  }

  return (
    <div className={classes.container}>
      <div className={classes.container} >
        <Paper style={{ width: '100%' }} className={classes.searchContainer}>
          {loading ? (<CircularProgress size={20} />) : <SearchIcon />}
          <InputBase
            style={{ width: "100%" }}
            placeholder={`Search by name`}
            onChange={(e) => debounceCall(e.target.value)}
          />
        </Paper>
      </div>
    </div>
  );
}

export default withStyles(Style)(SearchBar)
