import React from "react";

function Series(props) {
  return (
    <div className="seriesdiv">
      <div className="infodiv">
        <div className="imgdiv">
          <img src={props.seriesPoster} alt=""></img>
        </div>
        <div className="despdiv">
          <h3>{props.name}</h3>
          <h5>{props.director}</h5>
          <h5>{props.timeline}</h5>
          <h5>{props.rating}</h5>
          <p>{props.about}</p>
        </div>
      </div>
      <hr></hr>
      <div className="seasonsdiv">
        <div className="seasonsdetailsdiv">
          <h4>{props.seasons}</h4>
          <h4>{props.episodes}</h4>
        </div>
        <div className="seasonspostersdiv">
          <img src={props.season1} alt=""></img>
          <img src={props.season2} alt=""></img>
          <img src={props.season3} alt=""></img>
          <img src={props.season4} alt=""></img>
          <img src={props.season5} alt=""></img>
          <img src={props.season6} alt=""></img>
          <img src={props.season7} alt=""></img>
          <img src={props.season8} alt=""></img>
          <img src={props.season9} alt=""></img>
          <img src={props.season10} alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Series;
