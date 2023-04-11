import { ClubMember } from "../../types"

// RosterItem takes in a type called "ClubMember", which we destructure immediately
const RosterItem = (
  { name, partyParrot, favoriteIceCream, favoriteTrick, hobby }
    : ClubMember) => (
  <div>
    <h2>
      {name} <img src={partyParrot} alt={`${name}'s party parrot`} />
    </h2>
    <p>
      Favorite Ice Cream Flavor: <a>{favoriteIceCream}</a>
    </p>
    <p>
      Favorite Yo-Yo Trick: <a>{favoriteTrick}</a>
    </p>
    <p>
      Hobby: <a>{hobby}</a>
    </p>
  </div>
)

export default RosterItem
