import { Dispatch, SetStateAction } from "react"
import { Upgrade } from "../../types"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly upgrade: Upgrade
  readonly brbs: number
  readonly setBRBs: Dispatch<SetStateAction<number>>
  readonly upgradeCounts: Map<Upgrade, number>
  readonly setUpgradeCounts: Dispatch<SetStateAction<Map<Upgrade, number>>>
}

const UpgradeDisplay = ({ upgrade, brbs, setBRBs, upgradeCounts, setUpgradeCounts }: Props) => {
  // TODO: Calculate this using upgradeCounts which should be passed down
  const purchasedCount = upgradeCounts.get(upgrade)
  // TODO: Make price increase as you purchase more
  const price = Math.round(Math.pow(1.15, purchasedCount) * upgrade.basePrice)

  const buyUpgrade = () => {
    if (brbs < price) return
    // TODO: What is missing here?
    setBRBs(brbs - price)
    const newValue: Map<Upgrade, number> = upgradeCounts.set(upgrade, purchasedCount+1);
    // Creates a copy of the map so that React knows that newValue is different
    setUpgradeCounts(new Map(newValue)); // this is GOOD
  }

  return (
    <div>
      <h3>
        {upgrade.name} [{purchasedCount}]
      </h3>
      <p>Effect: {upgrade.incomePerTick} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      {/* TODO: Disable buy button (grey out) if you can't afford upgrade */}
      <button onClick={buyUpgrade} disabled={brbs<price}>Buy</button>
    </div>
  )
}

export default UpgradeDisplay
