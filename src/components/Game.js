import React from "react";
// Styling and Animations 
import styled from "styled-components";
import {motion} from "framer-motion";
// Redux
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";
import {Link} from "react-router-dom";
import {smallImage} from "../util.js";
import {popup} from "../animations";

const Game = ({name,released,image, id}) => {
  const StringPathId = id.toString();
  //Load Details Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overlow = "hidden";
    dispatch(loadDetail(id))
  };
  return (
    <StyledGame variants={popup} initial="hidden" animate="show" layoutId={StringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${StringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${StringPathId}`} src={smallImage(image, 640)} alt={name}/>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  cursor: pointer;
  overflow: hidden;
`;

export default Game;
