import { Upgrade } from "../../types"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly upgrade: Upgrade
  readonly brbs: number
}

const UpgradeDisplay = ({ upgrade, brbs }: Props) => {
  // TODO: Calculate this using upgradeCounts which should be passed down
  const purchasedCount = 0
  // TODO: Make price increase as you purchase more
  const price = upgrade.basePrice

  const buyUpgrade = () => {
    if (brbs < price) return
    // TODO: What is missing here?
  }

  return (
    <div>
      <h3>
        {upgrade.name} [{purchasedCount}]
      </h3>
      <p>Effect: {upgrade.incomePerTick} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      {/* TODO: Disable buy button (grey out) if you can't afford upgrade */}
      <button onClick={buyUpgrade}>Buy</button>
    </div>
  )
}

export default UpgradeDisplay
