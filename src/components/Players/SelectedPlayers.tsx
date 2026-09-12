import { type Dispatch, type SetStateAction } from "react";
//import PlayerCard from "./PlayerCard";
import { TbTrash } from "react-icons/tb";
import type { Iplayer } from "../../types/playersType";
//import { AiFillDollarCircle } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

interface ISelectedPlayersType {
    selectedPlayer: Iplayer[];
    setSelectedPlayer: Dispatch<SetStateAction<Iplayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

function SelectedPlayers({
    selectedPlayer,
    setSelectedPlayer,
    coin,
    setCoin,
}: ISelectedPlayersType) {
    //console.log(selectedPlayer, 'from SelectedPlayers')

    const handlerRemovePlayer = (player: Iplayer) => {
        const resPlayers = selectedPlayer.filter(
            (selectPlayer) => selectPlayer.id !== player.id,
        );

        setSelectedPlayer(resPlayers);
        const newCoins = coin + player.price;
        setCoin(newCoins);
    };

    if (selectedPlayer.length === 0) {
        return (
            <div className="flex flex-col items-center text-center py-16">
                <h2 className="text-2xl font-samibold  text-gray-400">
                    No players selected yet
                </h2>

                <p className="mt-2 text-gray-300">
                    Go to available tab to select players
                </p>
            </div>
        );
    }

    return (
        <div className=" grid grid-cols-1 gap-7 mt-6 mb-3">
            {selectedPlayer.map((player: Iplayer) => {
                return (
                    <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-2xl py-2 px-4 ">
                        <div className="flex gap-4">
                            <img
                                src={player.playerImage}
                                alt=""
                                className="h-[60px] w-[100px] border-1  border-gray-200 rounded-2xl py-1 px-1 bg-green-50"
                            />
                            <div>
                                <h2 className="font-semibold text-xl">{player.playerName}</h2>
                                <p className=" text-gray-500">{player.playerType}</p>
                            </div>
                        </div>

                        <span
                            className="text-red-500 font-bold cursor-pointer"
                            onClick={() => {
                                handlerRemovePlayer(player);

                                toast.warn(`${player.playerName} removed!`, {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: "colored",
                                    transition: Bounce,
                                });
                            }}
                        >
                            <TbTrash />
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default SelectedPlayers;
