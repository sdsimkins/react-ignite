import React, {useEffect} from "react";
//Redux
import {useDispatch} from "react-redux";
import {loadGames} from "../actions/gamesAction.js";

const Home = () => {
    //Fetch Games 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );

};

export default Home;
