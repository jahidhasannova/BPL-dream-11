//import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Iplayer } from '../../types/playersType';
import PlayerCard from './PlayerCard';
//import { FaUser } from 'react-icons/fa';
//import { PiFlagDuotone } from 'react-icons/pi';

interface AvailablePlayersType {
    players: Iplayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}


const AvailablePlayers = ({ players, coin, setCoin, selectedPlayer, setSelectedPlayer }: AvailablePlayersType) => {
    //console.log(players, 'Find out players')
    //console.log(coin, setCoin ,'from AvailablePlayers ')
    return (
        <div className=' grid grid-cols-3 gap-7 mt-6 bg-green-100'>
            {
                players.map((player: Iplayer) => {
                    return <PlayerCard key={player.id} player={player} coin={coin}
                        setCoin={setCoin} selectedPlayer={selectedPlayer} 
                        setSelectedPlayer={setSelectedPlayer}></PlayerCard>
                })
            }
        </div>
    );
}

export default AvailablePlayers;