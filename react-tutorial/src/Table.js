import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Nimi </th>
                <th>Lasku </th>
                <th>Päivämäärä </th>
                <th>Summa </th>
                <th>Poista </th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nimi}</td>
                <td>{row.lasku}</td>
                <td>{row.pvmaara}</td>
                <td>{row.summa}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Poista</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;