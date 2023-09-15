import React from "react";
import './UserCard.css'; // Import your CSS file for styling

const UserCard = ({ top3users }) => {
    // Dummy data for the cards
    console.log("HEEERE", top3users)
    const cards = [
        { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet." },
        { id: 2, title: "Card 2", content: "Consectetur adipiscing elit." },
        { id: 3, title: "Card 3", content: "Pellentesque ac justo vel justo." },
    ];

    //restructuring so best player in the middle
    const newtop3users = top3users.slice(0, 2); 
    const player3 = top3users[2]; 

    newtop3users.reverse(); 
    newtop3users.push(player3); 

    console.log("newtop3users:", newtop3users);

    /*
    return (
        <div className="card-grid">
            {newtop3users.map((card) => (
                <div className="card" key={card?.id || "na"}>
                    <h2 className="card-title">{card?.username || "N/A"}</h2>
                    <h4 className="card-content">{card?.quizzesPlayed || 0}</h4>
                </div>
            ))}
        </div>
    );
    */
    return (
        <div className="card-grid">
            {newtop3users.map((card, index) => (
                <div className="cardUser" key={index}>
                    <h2 className="card-title">{card?.username || "N/A"}</h2>
                    <p className="card-content">{card?.quizzesPlayed || 0}</p>
                </div>
            ))}
        </div>
    );
};

export default UserCard;
