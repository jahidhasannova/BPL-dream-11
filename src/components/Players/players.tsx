import { use, useState, type Dispatch, type SetStateAction } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import type { Iplayer } from "../../types/playersType";

interface playersProps {
    playersPromise: Promise<Iplayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: playersProps) => {

    const players = use(playersPromise);

    //console.log(players);
    const [buttonType, setButtonType] = useState<"available" | "selected">("available") //available or selected
    //console.log(buttonType);
    const [selectedPlayer, setSelectedPlayer] = useState<Iplayer[]>([]);

    return (
        <div className="container mx-auto">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                <div>
                    {/* <button className={`btn ${buttonType === "available" ? "btn-success bg-amber-400" : ""}rounded-r-none`}>Available</button>
                     <button className={`btn ${buttonType === "selected" ? "btn-success bg-amber-400" : ""}rounded-r-none`}>Selected</button> */}
                    <button
                        onClick={() => setButtonType("available")}
                        className={`btn ${buttonType === "available" ? "btn-success bg-green-500" : ""
                            } rounded-r-none`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => setButtonType("selected")}
                        className={`btn ${buttonType === "selected" ? "btn-success bg-green-500" : ""
                            } rounded-l-none`}
                    >
                        Selected
                    </button>

                </div>
            </div>
            {buttonType === "available" ? (
                <AvailablePlayers players={players} coin={coin} setCoin={setCoin}
                    selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} >
                </AvailablePlayers>
            ) : (<SelectedPlayers selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} />)}

        </div>
    );
};

export default Players;