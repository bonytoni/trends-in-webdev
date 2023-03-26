import { ClubMember } from "../../types"

const rosterData: ClubMember[] = [
  /* TODO Add at least THREE people to your roster */
  {
    name: "Example Member",
    netid: "abc123",
    partyParrot: "https://cultofthepartyparrot.com/parrots/shipitparrot.gif",
    favoriteIceCream: "Vanilla",
  },
]

const Roster = () => {
  return (
    <>
      <p>This is the [TODO your club] club.</p>
      <p>It is the coolest club ever! Because it has the coolest people.</p>
      {/* TODO List your roster using .map() and the RosterItem component
          remember to assign key prop - you may assume netid is unique */}
    </>
  )
}

export default Roster
