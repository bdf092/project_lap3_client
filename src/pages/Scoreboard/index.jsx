import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import './scoreboard.css'
import UserCard from "../../components/UserCard";
import axios from "axios";
const Scoreboard = () => {
    const [users, setUsers] = useState([]);
    const testUsers0 = [
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

    
    useEffect(() => {
        const getUsers = async () => {
            try {
            const response = await axios.get("https://think-fast.onrender.com/users");
            setUsers(response.data);
            } catch (error) {
            console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, []);
        
    const columns = useMemo(
        () => [
        {
            Header: "Player",
            accessor: "username",
        },
        {
            Header: "Quizzes Played",
            accessor: "quizzesPlayed",
        },
        ],
        [users]
    );


    const sortedUsers = users.sort((a, b) => b.quizzesPlayed - a.quizzesPlayed);
    const data = useMemo(() => sortedUsers, []);
    const top3Users = users.slice(0, 3);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: users });

    
    return (
        
        <div id="sb-container">
            <div id="allTableContent">
                <div id="top3">

                    <UserCard top3users={top3Users}/>
                </div>
                {users.length > 0 ? (
                    <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                            ))}
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                    ) : (
                    // Render a loading message or handle the case when there's no data
                    <h2>Couldn't get users</h2>
                    )}
            </div>
                

        </div>
    );
};

export default Scoreboard;
