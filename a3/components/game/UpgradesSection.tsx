import { Dispatch, SetStateAction } from "react"
import { UPGRADES_DATA } from "../../data"
import UpgradeDisplay from "./UpgradeDisplay"
import { Upgrade } from "../../types"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly brbs: number
  readonly setBRBs: Dispatch<SetStateAction<number>>
  readonly upgradeCounts: Map<Upgrade, number>
  readonly setUpgradeCounts: Dispatch<SetStateAction<Map<Upgrade, number>>>
}

const UpgradesSection = ({ brbs, setBRBs, upgradeCounts, setUpgradeCounts }: Props) => {
  return (
    <div>
      <h2>Upgrades</h2>
      {UPGRADES_DATA.map((upgrade) => (
        // TODO: Add more props!
        <UpgradeDisplay key={upgrade.id} upgrade={upgrade} brbs={brbs}
        setBRBs={setBRBs} upgradeCounts={upgradeCounts} setUpgradeCounts={setUpgradeCounts}/>
      ))}
    </div>
  )
}

export default UpgradesSection
