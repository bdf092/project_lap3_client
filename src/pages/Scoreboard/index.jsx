import React, { useRef, useState, useEffect, useMemo } from "react";
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
    const userData = useMemo(() => sortedUsers, []);
    //header is for naming purposes, accessor is the actual property from object
    const columns = useMemo(() => [
    {
        header: "ID",
        accessor: "id",
    },
    {
        header: "Username",
        accessor: "name",
    },
    {
        header: "Quizzes Played",
        accessor: "quizzesPlayed",
    }
    ])

    
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

    return (
        <>
            <div>
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
                    <tbody></tbody>
                </table>
            </div>
        </>
    );
};
    

export default Scoreboard;
/*
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
                {userData.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.quizzesPlayed}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        */