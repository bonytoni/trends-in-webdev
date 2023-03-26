// some comments are from demo repo
import ContactCard, { ContactCardProps } from '@/components/ContactCard'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// function SimpleCounter() {
//   const [count, setCount] = useState<number>(0)
//   return (
//     <div>
//       <h1>I was clicked {count % 2 == 0 ? "even" : "odd"} number of times!</h1>
//       <button onClick={() => setCount(count + 1)}>Click me!</button>
//     </div>
//   )
// }

export default function Home() {
  // return (
  //   <SimpleCounter />
  // )

  // An array of contacts to render initially! Can be modified later.
  const initialContacts: ContactCardProps[] = [
    {
      name: "Tony Chen",
      nickname: "Bony",
      phone: "123-456-7890"
    },
    {
      name: "Keiry Gao",
      phone: "098-765-4321"
    }
  ]

  // Maintain a stateful array of the contacts we want to render!
  // Initialized to the initial contacts.
  const [contacts, setContacts] =
    useState<ContactCardProps[]>(initialContacts)

  // Whenever our state updates, console log the new state!
  // This is a great way to debug state changes!
  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  // Maintain state for the user's input for Name, Nickname, and Phone.
  const [formName, setFormName] = useState("");
  const [formNickname, setFormNickname] = useState("");
  const [formPhone, setFormPhone] = useState("");

  return (
    <main>
      <h1>Phonebook!</h1>
      <hr />
      <hr />
      Contacts:
      {/* Map our dynamically maintained `contacts` state variable to HTML elements directly! */}
      {contacts.map((contact) => {
        return (
          <>
            <hr />
            < ContactCard
              name={contact.name}
              nickname={contact.nickname}
              phone={contact.phone}
              key={contact.phone}
            />
          </>
        )
      })}
      {/* Input field that lets us create new contacts */}
      <hr />
      <h2>Add a new contact</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          // Modify the state!
          // We append a new contact to the end of the array
          // by "spreading" the existing contacts, and then
          // appending the new contact object.
          setContacts([
            ...contacts,
            {
              name: formName,
              nickname: formNickname,
              phone: formPhone,
            },
          ]);

          // Clear the form!
          setFormName("");
          setFormNickname("");
          setFormPhone("");
        }}
      >
        {/*
          We bind the three state values tracking the user's input for Name,
          Nickname, and Phone to HTML input elements.
          When the user types in the input, the state is updated, and the input
          element is updated to reflect the new state.
          Look at the `value` and `onChange` attributes of the input elements below.
        */}
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={formName}
          onChange={(event) => {
            setFormName(event.currentTarget.value);
          }}
        />
        <label htmlFor='nickname'>Nickname</label>
        <input
          type='text'
          id='nickname'
          value={formNickname}
          onChange={(event) => {
            setFormNickname(event.currentTarget.value);
          }}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          id='phone'
          value={formPhone}
          onChange={(event) => {
            setFormPhone(event.currentTarget.value);
          }}
        />
        <button type='submit'>Add</button>
      </form>
    </main>
  )
}
