// comments are from demo repo
import { useMemo } from "react"

type ContactCardProps = {
  name: string
  nickname?: string
  phone: string
}

// A contact card component!
// Note that we destructed the props object into three variables.
// Thus, we can use the variables directly in the function body.
//
// Additionally, we can track only `name` and `nickname` as dependencies
// in the `useMemo` hook, since `phone` is not used in the memoized value.
// Thus, if `phone` changes, the memoized value will not be needlessly updated.
const ContactCard = ({ name, nickname, phone }: ContactCardProps) => {
  // Memoize preferred title: nickname if provided, name otherwise.
  // Only update the memoized value if the props change.
  const title = useMemo(() => {
    // Check that a) a nickname was provided, and b) it is not an empty string.
    if (nickname !== undefined && nickname !== "") {
      return nickname
    }
    else {
      return name
    }
  }, [name, nickname])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>Phone: {phone}</li>
      </ul>
    </div>
  )
}

export type { ContactCardProps }
export default ContactCard