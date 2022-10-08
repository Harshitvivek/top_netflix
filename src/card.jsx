import React from "react";

function Card(props)
{
    return(
    <>
    <div className="Card">
        <div className="cardpic">
            <img src={props.imgsrc}  alt=" pic" />
        </div>
        <div className="carddis">
            <h2 className="title">{props.title}</h2>
            <h3 className="name">{props.sname}</h3>
            <a href={props.links} target='_blank' rel="noreferrer"><button className="cardbtn">Watch Now</button></a>
        </div>
    </div>
    </>
    );
}

export default Card;