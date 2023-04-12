import { Upgrade } from "../types"

export const TICK = 1000

// TODO: Have at least 3 total upgrades! (feel free to go ham tho)
export const UPGRADES_DATA: Upgrade[] = [
  {
    id: "freshman",
    name: "Freshman",
    basePrice: 10,
    incomePerTick: 1,
  },
  {
    id: "louies",
    name: "Louie's Lunch",
    basePrice: 50,
    incomePerTick: 4,
  },
]
