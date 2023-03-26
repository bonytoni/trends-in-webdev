import { useEffect, useRef, useState } from "react"

const TICK = 1000

const Game = () => {
  const [brbs, setBRBs] = useState(0)
  /* TODO Use useState to create the rest of game state */

  // This is a mutable function so we can update what happens in each tick
  const updateTick = useRef<() => void>()

  useEffect(() => {
    updateTick.current = () => {
      /* TODO Make the BRBs count go up every tick */
      console.log(
        `This function gets updated with the brbs state variable because it is in the second argument`
      )
    }
  }, [brbs])

  // This sets a timer to run updateTick every TICK milliseconds
  useEffect(() => {
    const ticker = setInterval(() => updateTick.current(), TICK)
    return () => clearInterval(ticker)
  }, []) // <- [] means this effect runs at component load (only once!)

  return (
    <div>
      <h2>I have 0 BRBs.{/* TODO Make this number change! */}</h2>

      {/* TODO Make this button add 1 to your brb count when clicked */}
      <button onClick={() => console.log("[TODO get brb]")}>Acquire BRB</button>

      <div>
        <h3>Hire Freshman (1 BRB/tick)</h3>
        <p>Number of freshmen: 0{/* TODO Make this number change! */}</p>
        <p>Price: 10 BRBs</p>
        {/* TODO Make this button do something */}
        <button>Buy</button>
      </div>
    </div>
  )
}

export default Game
