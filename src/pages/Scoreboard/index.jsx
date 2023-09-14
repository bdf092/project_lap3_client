import React, { useMemo } from "react";
import { useTable } from "react-table";

const Scoreboard = () => {
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

    const columns = useMemo(
        () => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Username",
            accessor: "name",
        },
        {
            Header: "Quizzes Played",
            accessor: "quizzesPlayed",
        },
        ],
        []
    );

    const data = useMemo(() => testUsers, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
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
        </div>
    );
};

export default Scoreboard;
