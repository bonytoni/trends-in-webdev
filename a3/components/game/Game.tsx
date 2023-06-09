import { useEffect, useRef, useState } from "react"
import { UPGRADES_DATA, TICK } from "../../data"
import styles from "../../styles/Game.module.css"
import { Upgrade } from "../../types"
import ClickerSection from "./ClickerSection"
import UpgradesSection from "./UpgradesSection"

// This is the initial state for [upgradeCounts]
// We set all purchase counts to 0 at the beginning of the game
const initUpgrades = (): Map<Upgrade, number> => {
  const upgradesMap = new Map<Upgrade, number>()
  UPGRADES_DATA.forEach((upgrade) => upgradesMap.set(upgrade, 0))
  return upgradesMap
}

const Game = () => {
  const [brbs, setBRBs] = useState(0)

  // You can store upgrade information with a Map (like dictionary)
  // with [key = upgrade] and [value = number of times purchased]
  // TODO: Pass down this state to child components
  const [upgradeCounts, setUpgradeCounts] = useState(initUpgrades())

  const clickIncome = 1 + Array.from(upgradeCounts.values()).reduce((sum, curr) => sum + curr) // TODO: Calculate this using upgradeCounts
  const tickIncome = Array.from(upgradeCounts.entries()).reduce ((sum, curr) => sum + curr[0].incomePerTick * curr[1], 0) // TODO: Calculate this using upgradeCounts

  /** Ticker Section Begin: No need to touch */
  const onTick = useRef<() => void>()

  useEffect(() => {
    onTick.current = () => setBRBs((x) => x + tickIncome)
  }, [tickIncome])

  useEffect(() => {
    const ticker = setInterval(() => onTick.current(), TICK)
    return () => clearInterval(ticker)
  }, [])
  /** Ticker Section End: No need to touch */

  return (
    <div className={styles.container}>
      {/* TODO: Display '💰BRB Clicker💰' instead when you win (have purchased at least one of each upgrade) */}
      {Array.from(upgradeCounts.values()).every(val => val >= 1) ?
      <h1>💰BRB Clicker💰</h1> : <h1>BRB Clicker</h1>}
      {/* TOOD: Display a win message (such as <p>YOU WON! See how far you go!</p>) ONLY if you win */}
      {Array.from(upgradeCounts.values()).every(val => val >= 1) ?
      <p>YOU WON! See how far you go!</p> : <p>Go and make some money!!!</p>}
      <div className={styles.body}>
        <div className={styles.column}>
          {/* TODO: Add more props! */}
          <ClickerSection clickIncome={clickIncome} tickIncome={tickIncome}
          brbs={brbs} setBRBs={setBRBs}/>
        </div>
        <div className={styles.column}>
          {/* TODO: Add more props! */}
          <UpgradesSection brbs={brbs} setBRBs={setBRBs} upgradeCounts={upgradeCounts}
          setUpgradeCounts={setUpgradeCounts}/>
        </div>
      </div>
    </div>
  )
}

export default Game
