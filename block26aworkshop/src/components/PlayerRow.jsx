import React from "react";

export default function PlayerRow({ player, setSelectedPlayerId}){
    return (
        <div className="card">
            <p>Name: {player.first_name} {player.last_name}</p>
            <p>Position: {player.position}</p>
            <p>College: {player.college}</p>
            <button onClick={()=>setSelectedPlayerId(player.id)}>Learn More</button>
        </div>
        
    )
}