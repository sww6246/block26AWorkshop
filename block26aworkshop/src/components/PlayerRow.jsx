import React from "react";

export default function PlayerRow({ player, setSelectedPlayerId}){
    return (
        <div className="card">
            <h2>{player.first_name} {player.last_name}</h2>
            <p><strong>Position:</strong> {player.position}</p>
            <p><strong>College:</strong> {player.college}</p>
            <button onClick={()=>setSelectedPlayerId(player.id)}>Learn More</button>
        </div>
        
    )
}