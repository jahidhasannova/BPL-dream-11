import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Players from "./components/Players/players";
import { Suspense } from "react";
import type { Iplayer } from "./types/playersType";
import { useState } from 'react';


const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {
  //const playersPromise = playersFetch();
  const [playersPromise]= useState(playersFetch());
  const [coin, setCoin] = useState(50000000)
  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2 className="text-center text-xl font-bold text-green-600 mt-10 animate-pulse">
        Loading...
      </h2>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
    </>
  )
}

export default App
