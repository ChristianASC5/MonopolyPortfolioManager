'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

const StartGamePage: React.FC = () => {
    // State to keep track of the number of players
    const [playerCount, setPlayerCount] = useState<number>(1);

    // Function to increment player count
    const incrementCount = () => {
        setPlayerCount(playerCount + 1);
    };

    // Fucntion to decrement player count
    const decrementCount = () => {
        setPlayerCount(playerCount - 1 > 1 ? playerCount - 1 : 1);
    };

    return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-10">
        <h1 className="mb-1">Monopoly Portfolio Manager</h1>
        <p> Specify the number of players:</p>
        <div>
            <button onClick={decrementCount}>-</button>
            <span> {playerCount} </span>
            <button onClick={incrementCount}>+</button>
        </div>
        <div>
            <button>Start Game</button>
        </div>
    </div>
    );
};

export default StartGamePage;