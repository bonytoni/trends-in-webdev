import { ClubMember } from "../../types"

type Props = {
  member: ClubMember
}

// RosterItem takes in a prop called "member", which we destructure immediately
const RosterItem = ({
  member: { name, partyParrot, favoriteIceCream },
}: Props) => (
  <div>
    <h2>
      {name} <img src={partyParrot} alt={`${name}'s party parrot`} />
    </h2>
    <p>
      Favorite Ice Cream Flavor: <a>{favoriteIceCream}</a>
    </p>
    {/* TODO Display your additional fields in ClubMember type */}
  </div>
)

export default RosterItem
