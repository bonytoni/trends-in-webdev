import { ClubMember } from "../../types"
import RosterItem from "./RosterItem"

const rosterData: ClubMember[] = [
  {
    name: "Michael Le",
    netid: "ml324",
    partyParrot: "https://cultofthepartyparrot.com/parrots/hd/kindasusparrot.gif",
    favoriteIceCream: "all flavors",
    favoriteTrick: "backpacking",
    hobby: "eating chips"
  },
  {
    name: "Larry Lu",
    netid: "ll105",
    partyParrot: "https://cultofthepartyparrot.com/parrots/hd/tpparrot.gif",
    favoriteIceCream: "vanilla",
    favoriteTrick: "bodywrap",
    hobby: "scrolling through twitter"
  },
  {
    name: "Kenneth Wu",
    netid: "kw69",
    partyParrot: "https://cultofthepartyparrot.com/parrots/hd/dealwithitparrot.gif",
    favoriteIceCream: "chocolate",
    favoriteTrick: "monorail",
    hobby: "one piece"
  },
]

const Roster = () => {
  return (
    <>
      <p>This is the Pro-Yos club.</p>
      <p>It is the coolest club ever! Because it has the coolest people.</p>
      {rosterData.map((member) => {
        return (
          <>
            <hr />
            < RosterItem
              {...member}
              key={member.netid}
            />
          </>
        )
      })}
    </>
  )
}

export default Roster
