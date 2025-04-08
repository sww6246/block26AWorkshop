import React from "react";

export default function PlayerRow({ player, setSelectedPlayerId}){
    return (
        <div className="card">
            <h2>{player.first_name} {player.last_name}</h2>
            <p>Position: {player.position}</p>
            <p>College: {player.college}</p>
            <button onClick={()=>setSelectedPlayerId(player.id)}>Learn More</button>
        </div>
        
    )
}