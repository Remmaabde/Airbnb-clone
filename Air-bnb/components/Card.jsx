import React from "react"

export default function Card(props){
    let badgeText
        if (props.openSpots === 0) {
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }
    return(
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../public/img/${props.coverImg}`} alt="Kaite-zaferes" className="card-image" />
            <div className="card-stats">
                <img src="../img/Star 1.png" alt="Star" className="card-star" />
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">{props.stats.reviewCount}</span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.lesson}</h2>
            <p><b>From ${props.price}</b> /person</p>
        </div>
    )
}