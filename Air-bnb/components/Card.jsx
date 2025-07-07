import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="Kaite-zaferes" className="card-image" />
            <div className="card-stats">
                <img src="../img/Star 1.png" alt="Star" className="card-star" />
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.points}</span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.lesson}</h2>
            <p><b>{props.price}</b> /person</p>
        </div>
    )
}