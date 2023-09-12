import React, { useRef, useState, useEffect } from "react";
import "./scoreboard.css"

const Scoreboard = () => {

    //sample data
    const testUsers = [
        { id: 1, name: "FantasticRabbit42", quizzesPlayed: 10 },
        { id: 2, name: "LuckyTiger7", quizzesPlayed: 2 },
        { id: 3, name: "WhisperingStar23", quizzesPlayed: 4 },
        { id: 4, name: "SapphirePanda", quizzesPlayed: 9 },
        { id: 5, name: "WanderingDragon18", quizzesPlayed: 1 },
        { id: 6, name: "CozyElephant", quizzesPlayed: 97 },
        { id: 7, name: "MidnightOwl88", quizzesPlayed: -3 },
        { id: 8, name: "ElectricLion12", quizzesPlayed: 56 },
        { id: 9, name: "CosmicUnicorn", quizzesPlayed: 2 },
        { id: 10, name: "MysticFox36", quizzesPlayed: 369 }
    ];
    const [users, setUsers] = useState(testUsers)

    const sortedUsers = testUsers.sort((a, b) => b.quizzesPlayed - a.quizzesPlayed);

    return (
        <div>
            <h2>Scoreboard</h2>
            <table>
            <thead>
                <tr>
                <th>Player</th>
                <th>Quizzes played</th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.quizzesPlayed}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};
    

export default Scoreboard;