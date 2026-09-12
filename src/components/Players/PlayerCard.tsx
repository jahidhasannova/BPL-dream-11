
import { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/playersType';
import { FaUser } from 'react-icons/fa';
import { PiFlagDuotone } from 'react-icons/pi';
import { Bounce, toast } from 'react-toastify';
//import SelectedPlayers from './SelectedPlayers';


interface PlayerCardType {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayer, setSelectedPlayer }: PlayerCardType) => {

    //const [isSelected, setIsSelected] = useState(false); 
    const isSelected = selectedPlayer.some(
        selected => selected.id === player.id
    );

    const handelSelectPlayer = () => {
        const newCoins = coin - player.price;

        if (newCoins >= 0) {
            setCoin(newCoins);

            setSelectedPlayer([
                ...selectedPlayer,
                player
            ]);

            toast.success(`${player.playerName} selected successfully!`, {
                position: "top-center",
                autoClose: 5000,
                theme: "colored",
                transition: Bounce,
            });
        } else {
            toast.warn(
                "Insufficient coins! Please choose a cheaper player.",
                {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "colored",
                    transition: Bounce,
                }
            );
        }
    };

    return (
        <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl 
        transition-all duration-300 rounded-2xl overflow-hidden bg-white">

            {/* Player Image */}
            <figure className="h-64 bg-base-200">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="w-full h-full object-contain"
                />
            </figure>

            <div className="card-body p-5">

                {/* Name */}
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <FaUser />
                    </div>

                    <h2 className="text-xl font-bold">
                        {player.playerName}
                    </h2>
                </div>

                {/* Origin + Player Type */}
                <div className="flex items-center justify-between gap-3 mt-2">

                    <div className="flex items-center gap-2 text-gray-500">
                        <PiFlagDuotone className="text-xl" />
                        <span className="font-medium">
                            {player.origin}
                        </span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {player.playerType}
                    </span>
                </div>

                <div className="divider my-1" />

                {/* Rating */}
                <h3 className="text-lg font-bold">
                    Rating
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-1">

                    <div className="bg-base-200 rounded-xl p-3">
                        <p className="text-xs text-gray-500 mb-1">
                            Batting
                        </p>
                        <p className="font-semibold">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-3 text-right">
                        <p className="text-xs text-gray-500 mb-1">
                            Bowling
                        </p>
                        <p className="font-semibold">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-3">

                    <div>
                        <p className="text-xs text-gray-500">
                            Price
                        </p>

                        <p className="text-xl font-bold">
                            ${player.price}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handelSelectPlayer}
                        className="btn btn-primary rounded-xl px-5"
                        disabled={isSelected}
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;

