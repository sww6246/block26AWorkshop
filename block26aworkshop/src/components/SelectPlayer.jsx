import React, { useState, useEffect } from "react";

export default function SelectedPlayer({ selectedPlayerId, setSelectedPlayerId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch("https://api.balldontlie.io/v1/players", {
          headers: {
            Authorization: "09085da5-4b98-41b7-a501-451712f8d2ad",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const selectedPlayer = data.data.find((p) => p.id === selectedPlayerId);
        setPlayer(selectedPlayer);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlayers();
  }, [selectedPlayerId]);

  if (!player) return <p>Loading player details...</p>;

  return (
    <div className="single-card">
      <h2>{player.first_name} {player.last_name}</h2>
      <p>Position: {player.position || "N/A"}</p>
      <p>Team: {player.team?.full_name}</p>
      <p>Height: {player.height}</p>
      <p>Weight: {player.weight} lbs.</p>
      <p>Nationality: {player.country}</p>
      <p>Draft Year: {player.draft_year}</p>
      <p>Player College: {player.college}</p>
      <p>Jersey Number: {player.jersey_number}</p>
      <button onClick={() => setSelectedPlayerId(null)}>Back to All Players</button>
    </div>
  );
}