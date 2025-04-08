import { useEffect, useState } from "react";
import PlayerRow from "./PlayerRow";

export default function PlayerList({setSelectedPlayerId}){
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        async function getPlayers() {
            try {
              const response = await fetch("https://api.balldontlie.io/v1/players", {
                headers: {
                  "Authorization": "09085da5-4b98-41b7-a501-451712f8d2ad",
                  "Content-Type": "application/json"
                }
              });
          
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
          
              const data = await response.json();
              setPlayers(data.data); // note: the players are usually inside a `data` array
            } catch (err) {
              console.error("Fetch error:", err);
            }
          }
          getPlayers();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                   <th>NBA Players</th>
                </tr>
            </thead>
            <tbody>
              <div className="card-container">
                {players.map((player) =>(
                    <PlayerRow 
                    key={player.id}
                    player={player}
                    setSelectedPlayerId={setSelectedPlayerId}
                    />
                ))}
                </div>
            </tbody>
        </table>
    )
    
}