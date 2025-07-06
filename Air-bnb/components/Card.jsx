import React from "react"

export default function Card(){
    return(
        <div className="card">
            <img src="../img/image 12.png" alt="Kaite-zaferes" className="card-image" />
            <div className="card-stats">
                <img src="../img/Star 1.png" alt="Star" className="card-star" />
                <span className="gray">5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons from katie zaferes</p>
            <p><b>From $136</b> /person</p>
        </div>
    )
}